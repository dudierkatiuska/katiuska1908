'use strict'
const Sequelize = require('sequelize');
const {sequelize} = require('../config/config.js');
const Province = require('../models/province.js')

const Country = sequelize.define('tbl_country', {
  coun_ide: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  coun_iso23366: {
    type: Sequelize.CHAR
  },
  coun_description:{
    type: Sequelize.STRING
  },
  coun_icon:{
    type: Sequelize.STRING
  },
  coun_prefixphone:{
    type: Sequelize.CHAR
  },
  coun_status:{
    type: Sequelize.CHAR
  },
}, {timestamps: false, tableName: 'tbl_country',underscored: true});

Country.associate = function(models) {
  Country.hasMany(models.Province, {
    foreignKey: 'prov_country',
    as: 'Province'
  });
};

module.exports = Country

