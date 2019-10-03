'use strict'
const Sequelize = require('sequelize');
const {sequelize} = require('../config/config.js');
const ticket = require('../models/ticket.js')

const Codepromotion = sequelize.define('tbl_codepromotion', {
  copr_ide: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  copr_description: {
    type: Sequelize.STRING
  },
  copr_ticket:{
    type: Sequelize.CHAR
  },
}, {timestamps: false, tableName: 'tbl_codepromotion'});

Codepromotion.associate = function(models) {
  Codepromotion.hasMany(models.ticket, {
    foreignKey: 'tick_cupon',
    as: 'ticket'
  });
};

module.exports =Codepromotion

