import { Router } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const payload = {
            id: user.id,
            username: user.username
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
            expiresIn: '1h'
        });
        console.log(token);
        res.json({ token });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error during login' });
    }
    return;
};
const router = Router();
// POST /login - Login a user
router.post('/login', login);
export default router;
