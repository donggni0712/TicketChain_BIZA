'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tickets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tickets.init({
    name: DataTypes.STRING,
    expired: DataTypes.DATE,
    placename: DataTypes.STRING,
    imgsrc: DataTypes.STRING,
    weburl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tickets',
  });
  return Tickets;
};