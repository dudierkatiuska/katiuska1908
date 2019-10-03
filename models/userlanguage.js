'use strict'
const Sequelize = require('sequelize');
const {sequelize} = require('../config/config.js');
const user = require('../models/user.js')
const language = require('../models/language.js')


const Userlanguage = sequelize.define('tbl_userlanguage', {
  usla_ide: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  usla_user: {
    type: Sequelize.INTEGER,
    references: {
        model: user,
        key: 'user_ide'
    }
  },
  usla_lang:{
      type: Sequelize.INTEGER,
      references: {
          model: language,
          key: 'lang_ide'
      }
  }
}, {timestamps: false, tableName: 'tbl_userlanguage'});

Userlanguage.associate = function(models) {
    // associations can be defined here
    
};

module.exports = Userlanguage

