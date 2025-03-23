import { seedUsers } from './user-seeds.js';
import { seedTickets } from './ticket-seeds.js';

export const seedDatabase = async (): Promise<void> => {
  try {
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedTickets();
    console.log('\n----- TICKETS SEEDED -----\n');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error; // re-throw so server.ts can handle it
  }
};
