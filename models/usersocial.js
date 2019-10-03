'use strict'
const Sequelize = require('sequelize');
const {sequelize} = require('../config/config.js');

const Usersocial = sequelize.define('tbl_usersocial', {
  usso_ide: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  usso_user: {
    type: Sequelize.INTEGER,
    referencesKey: 'user_ide',
    allowNull: false
  },
  usso_social:{
    type: Sequelize.INTEGER,
    referencesKey: 'soci_ide',
    allowNull: false
  },
  usso_url:{
    type: Sequelize.STRING
  }
}, {timestamps: false, tableName: 'tbl_usersocial'});
  
Usersocial.associate = function(models) {
    // associations can be defined here
};

module.exports = Usersocial

