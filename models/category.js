'use strict'
const Sequelize = require('sequelize');
const {sequelize} = require('../config/config.js');
const Subcategory = require('../models/subcategory.js')

const Category = sequelize.define('tbl_category', {
  cate_ide: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  cate_description: {
    type: Sequelize.STRING
  },
  cate_status:{
    type: Sequelize.CHAR
  }
}, {timestamps: false, tableName: 'tbl_category'});

Category.associate = function(models) {
  Category.hasMany(models.Subcategory, {
    foreignKey: 'suca_cate',
    as: 'Subcategory'
  });
};

 module.exports = Category

