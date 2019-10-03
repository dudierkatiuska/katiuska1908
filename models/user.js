'use strict'
const Sequelize = require('sequelize');
const {sequelize} = require('../config/config.js');
const Language = require('../models/language.js')
const Social = require('../models/social.js')
const Usersocial = require('../models/usersocial.js')
const userlanguage = require('../models/userlanguage.js')
const access = require('../models/access.js')
const city = require('../models/city.js')



const User = sequelize.define('tbl_user', {
  user_ide: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  user_name: {
    type: Sequelize.STRING
  },
  user_lastname:{
    type: Sequelize.STRING
  },
  user_email:{ 
    type: Sequelize.STRING,
  },
  user_birthdate:{ 
    defaultValue: Sequelize.NOW,
    type: Sequelize.DATE
  },
  user_aboutme:{ 
    type: Sequelize.STRING
  },
  user_avatar:{ 
    type: Sequelize.STRING
  },
  user_city:{ 
    type: Sequelize.CHAR,
    references: {
      model: "City",
      key: "city_ide"
    },
    allowNull: true
  },
  user_mobile:{ 
    type: Sequelize.STRING
  },
  /*user_dtregister: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
  },
  user_dtactivation: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
  }*/
  user_dtregister:{ 
    defaultValue: Sequelize.NOW,
    type: Sequelize.DATE
  },
  user_dtactivation:{ 
    defaultValue: Sequelize.NOW,
    type: Sequelize.DATE
  }
}, {timestamps: false, tableName: 'tbl_user'});

User.associate = function(models) {
    User.belongsToMany(models.language, {
      through: 'userlanguage',
      as: 'language',
      foreignKey: 'usla_user'
    });
    User.belongsToMany(models.Social, {
      through: 'tbl_usersocial',
      as: 'tbl_social',
      foreignKey: 'usso_user'
    });
    User.hasMany(models.access, {
      foreignKey: 'acce_user',
      as: 'access'
    });
    User.belongsTo(models.City, {
            onDelete: "RESTRICT",
            foreignKey: {
                fieldName: "user_city",
                allowNull: false,
                require: true
            },
            targetKey: "city_ide",
            as: "City"
        });
};

module.exports = User

