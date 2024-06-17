const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/db');

const Author = sequelize.define('Author', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  biography: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'authors'
});

module.exports = Author;
