'use strict'
const {sequelize} = require('../config/config.js');
var user_model = require('../models/user.js')
var language_model = require('../models/language.js')
var city_model = require('../models/city.js')
var country_model = require('../models/country.js')
var province_model = require('../models/province.js')
const { checkToken } = require('../config/tokens')

async function createUser(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    const data = {
        "user_name" : req.body.name,
        "user_lastname" : req.body.lastname,
        "user_email" : req.body.email,
        "user_birthdate" : req.body.birthdate,
        "user_aboutme" : req.body.aboutme,
        "user_avatar" : req.body.avatar,
        "user_city" : req.body.city,
        "user_mobile" : req.body.mobile,
        "user_dtregister" :req.body.dtregister,
        "user_dtactivation" : req.body.dtactivation,
    }
    try{
        var result = await(user_model.create(data))
        return 'Creación de usuario correcta'
    } catch (e) {
        return e.parent.detail
    }
}


async function updateUser(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var user_ide = req.params.user_ide;
    const {  user_name, user_lastname, user_email, user_birthdate, user_aboutme,user_avatar,user_city,user_mobile, user_dtregister, user_dtactivation} = req.body;
    const updateuser = await user_model.findAll({
        attributes: ['user_ide','user_name', 'user_lastname', 'user_email', 'user_birthdate', 'user_aboutme','user_avatar','user_city','user_mobile', 'user_dtregister', 'user_dtactivation'],
        where:{
           user_ide 
        }
    });
    if(updateuser.length > 0){
        return new Promise((resolve) => {
            updateuser.forEach(async user_model => {
                var results = ''
                try {
                    var result = await (user_model.update({
                                                user_name,
                                                user_lastname,
                                                user_email, 
                                                user_birthdate, 
                                                user_aboutme,
                                                user_avatar,
                                                user_city,
                                                user_mobile, 
                                                user_dtregister, 
                                                user_dtactivation
                                            }));
                    results = 'usuario actualizado correctamente';
                } catch (e) {
                    results = e.parent.detail;
                }
                resolve(results)
            })
        })
    } else {
        return new Promise((resolve) => {
            resolve("usuario no encontrado")
        })
    }
}


async function deleteUser(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var user_ide = req.params.user_ide;
    return new Promise(async(resolve) => {
        try{
            var result = await (user_model.destroy({
                where: {
                    user_ide
                }
            }));
            if (result == 1) {
                resolve('usuario eliminado correctamente')
            } else {
                resolve('usuario no encontrado')
            }
        } catch (e) {
            resolve('Hubo errores en la eliminación del usuario')
        }
    })
}

async function listUser(req, res) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    } 
    return new Promise(async(resolve) => {
        var result = await (user_model.findAll())
        var users = {};
        var count_users = result.length;
        if (count_users > 0) {
            for (var i = 0; i < result.length; i++) {
                var result_city = await (city_model.findAll({ where: { city_ide: result[i].user_city } }))
                var result_province = await (province_model.findAll({ where: { prov_ide: result_city[0].city_prov } }))
                var result_country = await (country_model.findAll({ where: { coun_ide: result_province[0].prov_country } }))
        
                users[i] = {};
                users[i].ide = result[i].user_ide;
                users[i].name = result[i].user_name;
                users[i].lastname = result[i].user_lastname;
                users[i].email = result[i].user_email;
                users[i].birthdate = result[i].user_birthdate;
                users[i].aboutme = result[i].user_aboutme;
                users[i].avatar = result[i].user_avatar;
                users[i].city = result[i].user_city;
                users[i].dtregister = result[i].user_dtregister;
                users[i].dtregister = result[i].user_dtregister;
                users[i].dtactivation = result[i].user_dtactivation;
                users[i].city = {};
                users[i].city.description = result_city[0].city_description;
                users[i].province = {};
                users[i].province.description = result_province[0].prov_description;
                users[i].country = {};
                users[i].country.description = result_country[0].coun_description;
            }
            resolve(users)
        } else {
            resolve('No hay ningún usuario para mostrar')
        }   
    })
}

async function getUserById(req, id) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    var user_ide = id;
    return new Promise(async(resolve) => {
        var result = await (user_model.findAll({ where: { user_ide:  user_ide } }))
        var count_user = result.length;
        if (count_user > 0) {
            resolve(result)
        } else {
            resolve('No hay ningún usuario para mostrar')
        }
        return result
    })
}


module.exports.createUser = createUser
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser
module.exports.listUser = listUser
module.exports.getUserById = getUserById