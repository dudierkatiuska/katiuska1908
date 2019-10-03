'use strict'
const Sequelize = require('sequelize');
const {sequelize} = require('../config/config.js');
const codepromotion = require('../models/codepromotion.js')
const liveevents = require('../models/liveevents.js')

const Ticket = sequelize.define('tbl_ticket', {
  tick_ide: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  tick_description: {
    type: Sequelize.STRING
  },
  tick_dtcreation:{
    type: Sequelize.DATE
  },
  tick_liveevents:{
    type: Sequelize.INTEGER
  },
  tick_valor:{
    type: Sequelize.STRING
  },
  tick_cupon:{
    type: Sequelize.STRING
  },
}, {timestamps: false, tableName: 'tbl_ticket'});

Ticket.associate = function(models) {
  Ticket.belongsTo(models.codepromotion, {
    foreignKey: 'tick_cupon',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  });
  Ticket.belongsTo(models.liveevents, {
    foreignKey: 'tick_liveevents',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  });
};

module.exports =Ticket

