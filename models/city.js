'use strict'
const Sequelize = require('sequelize');
const {sequelize} = require('../config/config.js');
const Province = require('../models/province.js')
const User = require('../models/user.js')

const City = sequelize.define('tbl_city', {
  city_ide: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  city_description: {
    type: Sequelize.STRING
  },
  city_capital:{
    type: Sequelize.CHAR
  },
  city_zipcode:{
    type: Sequelize.CHAR
  },
  city_prov:{
    type: Sequelize.INTEGER,
    references: {
      model: "Province",
      key: "prov_ide"
    }
  },
  city_status:{
    type: Sequelize.CHAR
  },
}, {timestamps: false, tableName: 'tbl_city'});

City.associate = function(models) {
  City.belongsTo(models.Province, {
            onDelete: "RESTRICT",
            foreignKey: {
                fieldName: "city_prov",
                allowNull: false,
                require: true
            },
            targetKey: "prov_ide",
            as: "Province"
        });
  City.hasMany(models.User, {
    foreignKey: 'user_city',
    as: 'User'
  });
};

module.exports = City

