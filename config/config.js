'use strict'
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
                              'dbpg_gotmystreaming',
                              'postgres',
                              'fabi17501515',
                              {
                                host: 'localhost',
                                port: '5432',
                                dialect: 'postgres', 
                                pool:{
                                  max:5,
                                  min:0,
                                  require:30000,
                                  idle:10000
                                }
                              }
                          )

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })

module.exports.sequelize = sequelize 
