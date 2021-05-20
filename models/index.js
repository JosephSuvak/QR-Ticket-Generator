// Importing all models 
//----------------------
const User = require('./User');
const Ticket = require('./Ticket');
const Show = require('./Show');

// Create Associations
//---------------------

User.hasMany(Ticket, {
    foreignKey: 'user_id'
});

Ticket.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
})

Show.hasMany(Ticket, {
    foreignKey: 'show_id',
    OnDelete: 'SET NULL'
})

Ticket.belongsTo(Show, {
    foreignKey: 'show_id',
    onDelete: 'SET NULL'
})