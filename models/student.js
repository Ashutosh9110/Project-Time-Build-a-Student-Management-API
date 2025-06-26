const { Sequelize, DataTypes } = require("sequelize")
const sequelize = require("../utils/db-connection")




const Students1 = sequelize.define("Students1", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull : false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // timestamps: false   
})


module.exports = Students1