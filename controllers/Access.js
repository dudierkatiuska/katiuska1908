'use strict'
var access_model = require('../models/access.js')
var user_model = require('../models/user.js')
var jwt = require('jsonwebtoken')
const { checkToken } = require('../config/tokens') 


async function createAccess(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    const data = {
        "acce_nick" : req.body.nick,
        "acce_password" : req.body.password,
        "acce_user" : req.body.user,
        "acce_moderator" : req.body.moderator,
        "acce_status" : req.body.status,
    }
    try{
        var result = await(access_model.create(data))
        return 'Se creó el acceso correctamente'
    } catch (e) {
        return e.parent.detail
    }   
}

async function updateAccess(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    
    var acce_ide = req.params.acce_ide;
    const { acce_nick, acce_password,acce_user,acce_moderator,acce_status} = req.body;
    const updateaccess = await access_model.findAll({
        attributes: ['acce_ide','acce_nick', 'acce_password','acce_user','acce_moderator','acce_status'],
        where:{
           acce_ide 
        }
    });
    if (updateaccess.length > 0) {
        return new Promise((resolve) => {
            updateaccess.forEach(async access_model => {
                var results = ''
                try {
                    var result = await (access_model.update({
                                                    acce_nick,
                                                    acce_password,
                                                    acce_user,
                                                    acce_moderator,
                                                    acce_status
                                            }));
                    results = 'Se actualizó el acceso correctamente';
                } catch (e) {
                    results = e.parent.detail;
                }
                resolve(results)
            })
        })
    } else {
        return new Promise((resolve) => {
            resolve("Acceso no encontrado")
        })
    }
}

async function deleteAccess(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    var acce_ide = req.params.acce_ide;
    return new Promise(async(resolve) => {
        try{
            var result = await (access_model.destroy({
                where: {
                    acce_ide
                }
            }));
            if (result == 1) {
                resolve('Se eliminó el acceso correctamente')
            } else {
                resolve('Acceso no encontrado')
            }
        } catch (e) {
            resolve('Hubo errores en la eliminación del acceso')
        }
    })
}

async function listAccess(req, res) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    
    return new Promise(async(resolve) => {
        var result = await (access_model.findAll())
        var access = {};
        var count_access = result.length;
        if (count_access > 0) {
            for (var i = 0; i < result.length; i++) {
                var result_user = await (user_model.findAll({ where: { user_ide: result[i].acce_user } }))
                access[i] = {};
                access[i].ide = result[i].acce_ide;
                access[i].nick = result[i].acce_nick;
                access[i].password = result[i].acce_password;
                access[i].user = result[i].acce_user;
                access[i].moderator = result[i].acce_moderator;
                access[i].status = result[i].acce_status;
                access[i].user = {};
                access[i].user.name = result_user[0].user_name;
            }
            resolve(access)
        } else {
            resolve('No hay ningún acceso para mostrar')
        }   
    })
}

async function getAccessById(req, id) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    var acce_ide = id;
    return new Promise(async(resolve) => {
        var result = await (access_model.findAll({ where: { acce_ide:  acce_ide } }))
        var count_access = result.length;
        if (count_access > 0) {
            resolve(result)
        } else {
            resolve('No hay ningún acceso para mostrar')
        }
        return result
    })
}

async function login(req, res)
{
    var acce_nick = req.body.acce_nick,
        acce_password = req.body.acce_password
    return new Promise(async(resolve) => {
        var result = await (access_model.findAll({ where: { acce_nick:  acce_nick, acce_password: acce_password } }))
        if (result.length == 0) {
            resolve('El usuario o la contraseña son incorrectos')
        } else {
            var id = {id: result.acce_user}
            var token = jwt.sign(id, 'Gotmy2019', {
                expiresIn: (((2 * 60) * 60) * 1000)
            })
            resolve(token); 
        }
    })
}

async function register(req, res)
{
    var acce_nick = req.body.acce_nick,
        acce_password = req.body.acce_password,
        date = new Date(),
        date_reg = (date.getMonth() +1) + "/" + date.getDate() + "/" + date.getFullYear()
    const data = {
        "user_name" : '',
        "user_lastname" : '',
        "user_email" : acce_nick,
        "user_birthdate" : date_reg,
        "user_aboutme" : '',
        "user_avatar" : '',
        "user_city" : 1,
        "user_mobile" : '',
        "user_dtregister" : date_reg,
        "user_dtactivation" : date_reg,
    }
    var result_user = await(user_model.create(data))
    if (result_user != null) {
        const data = {
            "acce_nick" : acce_nick,
            "acce_password" : acce_password,
            "acce_user" : result_user.user_ide,
            "acce_moderator" : 0,
            "acce_status" : 1,
        }
        var result_access = await(access_model.create(data))
        if (result_access != null) {
            res.send('Usuario creado correctamente');
        }else {
            res.send('error al registrar el usuario'); 
        }
    }
}


module.exports.createAccess = createAccess
module.exports.updateAccess = updateAccess
module.exports.deleteAccess = deleteAccess
module.exports.listAccess = listAccess
module.exports.getAccessById = getAccessById
module.exports.login = login
module.exports.register = register