'use strict'
const Sequelize = require('sequelize');
const {sequelize} = require('../config/config.js');
const user = require('../models/user.js')
const userlanguage = require('../models/userlanguage.js')

const Language = sequelize.define('tbl_language', {
  lang_ide: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  lang_description: {
    type: Sequelize.STRING
  },
  lang_status:{
    type: Sequelize.CHAR
  }
}, {timestamps: false, tableName: 'tbl_language'});

Language.associate = function(models) {
  Language.belongsToMany(models.user, {
    through: 'userlanguage',
      as: 'user',
      foreignKey: 'usla_lang'
  });
    // Language.belongsToMany(user, {
    //     through: userlanguage,
    //     as: 'User'
    // });
};




 module.exports = Language

