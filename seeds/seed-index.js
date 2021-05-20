const seedUsers = require('./user-seeds');
const seedTicket = require('./ticket-seeds');
const seedConcert = require('./concert-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedConcert();
  console.log('--------------');

  await seedTicket();
  console.log('--------------');

  process.exit(0);
};

seedAll();

module.exports = seedAll;