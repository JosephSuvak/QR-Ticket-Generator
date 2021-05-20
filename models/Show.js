const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Show Model
//-------------------
class Show extends Model {}

// Create Show Fields
//--------------------
Show.init(
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
    show_name: {
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
modelName: 'show'
}
)

module.exports = Show;