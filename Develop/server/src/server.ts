import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';
import { seedDatabase } from './seeds/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));
app.use(express.json());
app.use(routes);

// Check for env flag
const shouldSeed = process.env.SEED_ON_START === 'true';

sequelize.sync({ force: shouldSeed }).then(async () => {
  if (shouldSeed) {
    console.log('🌱 Seeding database...');
    await seedDatabase();
  }

  app.listen(PORT, () => {
    console.log(`🚀 Server is listening on port ${PORT}`);
  });
});
