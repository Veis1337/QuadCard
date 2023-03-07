const seedSlimes = require('./slimeSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedSlimes();
  console.log('\n----- SLIMES SEEDED -----\n');
  process.exit(0);
};

seedAll();
