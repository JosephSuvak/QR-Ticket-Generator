const seedUsers = require('./user-seeds');
const seedTicket = require('./ticket-seeds');
const seedConcert = require('./concert-seeds');
const chalk = require('chalk');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log(chalk.redBright('--------------'));
  await seedUsers();
  console.log(chalk.redBright('--------------'));

  await seedConcert();
  console.log(chalk.redBright('--------------'));

  await seedTicket();
  console.log(chalk.redBright('--------------'));

  process.exit(0);
};

seedAll();

module.exports = seedAll;