const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');

// Create Ticket Model
//---------------------
class Ticket extends Model {}

// Create Ticket Fields
//----------------------
Ticket.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id : {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    show_id : {
        type: DataTypes.INTEGER,
        references: {
            model: 'show',
            key: 'id'
        }
    }
  },
  {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'ticket'
  }
);

module.exports = Ticket;