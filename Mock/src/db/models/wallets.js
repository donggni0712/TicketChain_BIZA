'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wallets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Wallets.init({
    privatekey: DataTypes.STRING,
    publickey: DataTypes.STRING,
    ballance: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Wallets',
  });
  return Wallets;
};