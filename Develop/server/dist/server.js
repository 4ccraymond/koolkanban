const forceDatabaseRefresh = false; // ← temporarily force DB reset for seeding
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';
import { seedAll } from './seeds/index.js'; // ✅ import seedAll
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.static('../client/dist'));
app.use(express.json());
app.use(routes);
sequelize.sync({ force: forceDatabaseRefresh }).then(async () => {
    if (forceDatabaseRefresh) {
        console.log('🌱 Seeding database...');
        await seedAll();
        console.log('✅ Seeding complete.');
    }
    app.listen(PORT, () => {
        console.log(`🚀 Server is listening on port ${PORT}`);
    });
});
