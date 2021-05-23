const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    email: 'JamesBlank@gmail.com',
    password: 'password123'
  },
  {
    email: 'JillValentine@gmail.com',
    password: 'password123'
  },
  {
    email: 'RockyRaccoon@gmail.com',
    password: 'password123'
  },
  {
    email: 'Bill&Ted@gmail.com',
    password: 'password123'
  },
  {
    email: 'JaquesEtch@gmail.com',
    password: 'password123'
  },
  {
    email: 'PurpBurp@gmail.com',
    password: 'password123'
  },
  {
    email: 'LeggoEggo@gmail.com',
    password: 'password123'
  },
  {
    email: 'AustinCool@gmail.com',
    password: 'password123'
  },
  {
    email: 'TrickyTrina@gmail.com',
    password: 'password123'
  },
  {
    email: 'JimmyCrackCorn@gmail.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;