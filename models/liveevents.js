'use strict'
const Sequelize = require('sequelize');
const {sequelize} = require('../config/config.js');
const ticket = require('../models/ticket.js')
const request = require('../models/request.js')
const accesstypeuser = require('../models/accesstypeuser.js')
const rating = require('../models/rating.js')

const Liveevents = sequelize.define('tbl_liveevents', {
  live_ide: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  live_description: {
    type: Sequelize.STRING
  },
  live_dtcreation:{
    type: Sequelize.DATE
  },
  live_video:{
    type: Sequelize.INTEGER
  },
  live_actu:{
    type: Sequelize.INTEGER
  },
  live_participants:{
    type: Sequelize.INTEGER
  },
  live_request:{
    type: Sequelize.INTEGER
  },
}, {timestamps: false, tableName: 'tbl_liveevents'});

Liveevents.associate = function(models) {
  Liveevents.hasMany(models.ticket, {
    foreignKey: 'tick_liveevents',
    as: 'ticket'
  });
  Liveevents.belongsTo(models.request, {
    foreignKey: 'live_request',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  });
  Liveevents.belongsTo(models.accesstypeuser, {
    foreignKey: 'live_actu',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  });
  Liveevents.belongsTo(models.video, {
    foreignKey: 'live_video',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  });
};

module.exports =Liveevents

