'use strict'
const Sequelize = require('sequelize');
const {sequelize} = require('../config/config.js');
const video = require('../models/video.js')
const accesstypeuser = require('../models/accesstypeuser.js')

const Rating = sequelize.define('tbl_rating', {
  rati_ide: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  rati_valor: {
    type: Sequelize.STRING
  },
  rati_video:{
    type: Sequelize.INTEGER
  },
  rati_actu:{
    type: Sequelize.INTEGER
  },
  rati_dtcreation:{
    type: Sequelize.DATE
  },
}, {timestamps: false, tableName: 'tbl_rating'});

Rating.associate = function(models) {
  Rating.belongsTo(models.accesstypeuser, {
    foreignKey: 'rati_actu',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  });
  Rating.belongsTo(models.video, {
    foreignKey: 'rati_video',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  });
};

module.exports =Rating

