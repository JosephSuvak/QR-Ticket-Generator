// Importing all models 
//----------------------
const User = require('./User');
const Ticket = require('./Ticket');
const Concert = require('./Concert');

// Create Associations
//---------------------

User.hasMany(Ticket, {
    foreignKey: 'user_id'
});

Concert.hasMany(Ticket, {
  foreignKey: 'concert_id'
});

Ticket.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Ticket.belongsTo(Concert, {
  foreignKey: 'concert_id',
  onDelete: 'SET NULL'
});

module.exports = { User, Concert, Ticket };