const Sequelize = require('sequelize');

require('dotenv').config();
const world = 50 

// create connection to db
// each team member will need to create a .env folder in their local
// repo for testing with
// DB_NAME = 'qr_ticket_db'
// DB_USER = 'root'
// DB_PW = 'Your-Password-here'
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });


module.exports = sequelize;