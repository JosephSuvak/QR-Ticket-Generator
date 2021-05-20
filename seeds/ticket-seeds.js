const sequelize = require('../config/connection');
const { Ticket } = require('../models');

const ticketdata = [
  {
    user_id : 1,
    concert_id: 1
  },
  {
    user_id: 1,
    concert_id: 2
  },
  {
    user_id: 1,
    concert_id: 3
  },
  {
    user_id: 2,
    concert_id: 4
  },
  {
    user_id: 2,
    concert_id: 5
  },
  {
    user_id: 2,
    concert_id: 6
  },
  {
    user_id: 3,
    concert_id: 7
  },
  {
    user_id: 3,
    concert_id: 8
  },
  {
    user_id: 3,
    concert_id: 9
  },
  {
    user_id: 4,
    concert_id: 10
  },
  {
    user_id: 4,
    concert_id: 1
  },
  {
    user_id: 4,
    concert_id: 2
  },
  {
    user_id: 5,
    concert_id: 3
  },
  {
    user_id: 5,
    concert_id: 4
  },
  {
    user_id: 5,
    concert_id: 5
  },
  {
    user_id: 6,
    concert_id: 6
  },
  {
    user_id: 6,
    concert_id: 7
  },
  {
    user_id: 6,
    concert_id: 8
  },
  {
    user_id: 7,
    concert_id: 9
  },
  {
    user_id: 7,
    concert_id: 10
  },
  {
    user_id: 7,
    concert_id: 1
  },
  {
    user_id: 8,
    concert_id: 2
  },
  {
    user_id: 8,
    concert_id: 3
  },
  {
    user_id: 8,
    concert_id: 4
  },
  {
    user_id: 9,
    concert_id: 5
  },
  {
    user_id: 9,
    concert_id: 6
  },
  {
    user_id: 9,
    concert_id: 7
  },
  {
    user_id: 10,
    concert_id: 8
  },
  {
    user_id: 10,
    concert_id: 9
  },
  {
    user_id: 10,
    concert_id: 10
  },
  {
    user_id: 2,
    concert_id: 7
  },
  {
    user_id: 6,
    concert_id: 2
  },
  {
    user_id: 7,
    concert_id: 5
  }
];

const seedTicket = () => Ticket.bulkCreate(ticketdata);

module.exports = seedTicket;