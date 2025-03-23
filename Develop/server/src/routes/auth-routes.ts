import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const login = async (req: Request, res: Response) => {
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

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY as string, {
      expiresIn: '1h'
    });

    res.json({ token });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error during login' });
  }

  return;
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
