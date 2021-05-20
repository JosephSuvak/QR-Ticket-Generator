const sequelize = require('../config/connection');
const { Concert } = require('../models');

const concertdata = [
  {
    venue_name: 'Wild Horse',
    concert_name: 'John Prine',
    stock: 100,
  },
  {
    venue_name: 'Exit Inn',
    concert_name: 'Kenny Loggins',
    stock: 100,
  },
  {
    venue_name: 'The End',
    concert_name: 'Disturbed',
    stock: 100,
  },
  {
    venue_name: 'Springwater',
    concert_name: 'Garth Brooks',
    stock: 100,
  },
  {
    venue_name: 'Mercy Lounge',
    concert_name: 'Tame Impala',
    stock: 100,
  },
  {
    venue_name: 'The High Watt',
    concert_name: 'Testament',
    stock: 100,
  },
  {
    venue_name: 'The 5 Spot',
    concert_name: 'Phish',
    stock: 100,
  },
  {
    venue_name: 'BridgeStone',
    concert_name: 'Wu-Tang',
    stock: 100,
  },
  {
    venue_name: 'Ryman Auditorium',
    concert_name: 'Patsy CLI-ne',
    stock: 100,
  },
  {
    venue_name: 'Grand Ole Opry',
    concert_name: 'JSON ALLDEEZ',
    stock: 100,
  }
];

const seedConcert = () => Concert.bulkCreate(concertdata);

module.exports = seedConcert;