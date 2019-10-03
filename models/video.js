'use strict'
const Sequelize = require('sequelize');
const {sequelize} = require('../config/config.js');
const liveevents = require('../models/liveevents.js')
const accesstypeuser = require('../models/accesstypeuser.js')

const Video = sequelize.define('tbl_video', {
  vide_ide: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  vide_description: {
    type: Sequelize.STRING
  },
  vide_dtcreation:{
    type: Sequelize.DATE
  },
  vide_actu:{
    type: Sequelize.INTEGER
  },
  vide_url:{
    type: Sequelize.STRING
  },
}, {timestamps: false, tableName: 'tbl_video'});

Video.associate = function(models) {
  Video.belongsTo(models.accesstypeuser, {
    foreignKey: 'vide_actu',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  });
  Video.hasMany(models.liveevents, {
    foreignKey: 'live_video',
    as: 'video'
  });
};

module.exports =Video

