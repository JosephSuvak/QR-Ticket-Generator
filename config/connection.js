const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to db for local and JAWSDB 
// each team member will need to create a .env folder in their local
// repo for testing
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });

module.exports = sequelize;