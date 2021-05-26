const sequelize = require('../config/connection');
const { Concert } = require('../models');

const concertdata = [
  {
    venue_name: 'Wild Horse',
    concert_name: 'John Prine',
    concert_date: '10/10/22',
    stock: 100,
  },
  {
    venue_name: 'Exit Inn',
    concert_name: 'Kenny Loggins',
    concert_date: '10/10/21',
    stock: 100,
  },
  {
    venue_name: 'The End',
    concert_name: 'Disturbed',
    concert_date: '11/10/21',
    stock: 100,
  },
  {
    venue_name: 'Springwater',
    concert_name: 'Garth Brooks',
    concert_date: '12/10/21',
    stock: 100,
  },
  {
    venue_name: 'Mercy Lounge',
    concert_name: 'Tame Impala',
    concert_date: '09/10/21',
    stock: 100,
  },
  {
    venue_name: 'The High Watt',
    concert_name: 'Testament',
    concert_date: '11/11/21',
    stock: 100,
  },
  {
    venue_name: 'The 5 Spot',
    concert_name: 'Phish',
    concert_date: '09/10/22',
    stock: 100,
  },

  {
    venue_name: 'BridgeStone',
    concert_name: 'Wu-Tang',
    concert_date: '11/10/22',
    stock: 100,
  },
  {
    venue_name: 'Ryman Auditorium',
    concert_name: 'Patsy CLI-ne',
    concert_date: '09/12/22',
    stock: 100,
  },
  {
    venue_name: 'Grand Ole Opry',
    concert_name: 'JSON ALLDEEZ',
    concert_date: '05/10/22',
    stock: 100,
  }
];


const seedConcert = () => Concert.bulkCreate(concertdata);

module.exports = seedConcert;