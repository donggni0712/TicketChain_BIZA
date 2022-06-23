'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TicketOwners extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TicketOwners.init({
    ticketid: DataTypes.INTEGER,
    ownerskey: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TicketOwners',
  });
  return TicketOwners;
};