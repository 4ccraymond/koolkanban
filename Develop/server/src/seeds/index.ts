// import { seedUsers } from './user-seeds.js';
// import { seedTickets } from './ticket-seeds.js';

// export const seedAll = async (): Promise<void> => {
//   try {
//     console.log('\n----- DATABASE SYNCED -----\n');
    
//     await seedUsers();
//     console.log('\n----- USERS SEEDED -----\n');
    
//     await seedTickets();
//     console.log('\n----- TICKETS SEEDED -----\n');
    
//     process.exit(0);
//   } catch (error) {
//     console.error('Error seeding database:', error);
//     process.exit(1);
//   }
// };

// seedAll();

import { seedUsers } from './user-seeds.js';
import { seedTickets } from './ticket-seeds.js';
import { sequelize, User, Ticket } from '../models/index.js';

export const seedAll = async (): Promise<void> => {
  try {
    console.log('\n🔁 Syncing models...\n');
    await sequelize.sync({ force: true });

    // Explicitly sync models again to ensure table creation order
    await User.sync();
    await Ticket.sync();

    console.log('\n✅ DATABASE SYNCED\n');

    await seedUsers();
    console.log('\n✅ USERS SEEDED\n');

    await seedTickets();
    console.log('\n✅ TICKETS SEEDED\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};
