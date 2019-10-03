'use strict'
const Sequelize = require('sequelize');
const {sequelize} = require('../config/config.js');
const Country = require('../models/province.js');
const City = require('../models/city.js');

const Province = sequelize.define('tbl_province', {
  prov_ide: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  prov_iso233661: {
    type: Sequelize.CHAR
  },
  prov_description:{
    type: Sequelize.STRING
  },
  prov_country:{
    type: Sequelize.INTEGER,    
    references: {
      model: "Country",
      key: "coun_ide"
    }
  },
  prov_status:{
    type: Sequelize.CHAR
  },
}, {
  timestamps: false, 
  tableName: 'tbl_province',
  underscored: true
   });

Province.associate = function(models) {
  Province.belongsTo(models.Country, {
            onDelete: "RESTRICT",
            foreignKey: {
                fieldName: "prov_country",
                allowNull: false,
                require: true
            },
            targetKey: "coun_ide",
            as: "Country"
        });
  Province.hasMany(models.City, {
      foreignKey: 'city_prov',
      as: 'City'
  });
};

module.exports = Province

