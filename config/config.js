'use strict'
const Sequelize = require('sequelize');
var pg = require('pg');
pg.defaults.ssl = true;

const sequelize = new Sequelize(
                              'd2gjhsg9msf12n',
                              'qllbcoacmyanwm',
                              'f51e52bbd7c65039e68e08b989e088ff39c0be92d46113281b48c67013860600',
                              {
                                host: 'ec2-54-228-252-67.eu-west-1.compute.amazonaws.com',
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
/*const sequelize = new Sequelize('postgres://qllbcoacmyanwm:f51e52bbd7c65039e68e08b989e088ff39c0be92d46113281b48c67013860600@ec2-54-228-252-67.eu-west-1.compute.amazonaws.com:5432/d2gjhsg9msf12n');*/

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log(err)
    console.log('No se conecto')
  })

module.exports.sequelize = sequelize 
