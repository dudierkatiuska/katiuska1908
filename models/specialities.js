'use strict'
const Sequelize = require('sequelize');
const {sequelize} = require('../config/config.js');
const subcategory = require('../models/subcategory.js')
const accesstypeuser = require('../models/accesstypeuser.js')

const Specialities = sequelize.define('tbl_specialities', {
  spec_ide: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  spec_description: {
    type: Sequelize.STRING
  },
  spec_suca:{
    type: Sequelize.INTEGER
  },
  spec_status:{
    type: Sequelize.CHAR
  }
}, {timestamps: false, tableName: 'tbl_specialities'});

Specialities.associate = function(models) {
  Specialities.belongsTo(models.subcategory, {
    foreignKey: 'spec_suca',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  });
  Specialities.hasMany(models.accesstypeuser, {
    foreignKey: 'actu_spec',
    as: 'accesstypeuser'
  });
};

module.exports = Specialities

