const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Show Model
//-------------------
class Concert extends Model { }

// Create Show Fields
//--------------------
Concert.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    venue_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    concert_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 100,

    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'concert'
  }
);

module.exports = Concert;