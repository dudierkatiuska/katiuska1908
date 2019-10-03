'use strict'
const Sequelize = require('sequelize');
const {sequelize} = require('../config/config.js');
const accesstypeuser = require('../models/accesstypeuser.js')
const liveevents = require('../models/liveevents.js')

const Request = sequelize.define('tbl_request', {
  requ_ide: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  requ_description: {
    type: Sequelize.STRING
  },
  requ_dtcreation:{
    type: Sequelize.DATE
  },
  requ_message:{
    type: Sequelize.STRING
  },
  requ_emisor:{
    type: Sequelize.INTEGER
  },
  requ_receptor:{
    type: Sequelize.INTEGER
  },
}, {timestamps: false, tableName: 'tbl_request'});

Request.associate = function(models) {
  Request.belongsTo(models.accesstypeuser, {
    foreignKey: 'requ_emisor',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  });
  Request.hasMany(models.Liveevents, {
    foreignKey: 'live_request',
    as: 'liveevents'
  });
};

module.exports = Request

