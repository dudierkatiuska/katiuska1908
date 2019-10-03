'use strict'
var usersocial_model = require('../models/usersocial.js')
var user_model = require('../models/user.js')
var social_model = require('../models/social.js')
const { checkToken } = require('../config/tokens') 


async function createUsersocial(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    const data = {
        "usso_user" : req.body.user,
        "usso_social" : req.body.social,
        "usso_url":req.body.url
    }
    try{
        var result = await(usersocial_model.create(data))
        return 'Se creo la red social correctamente'
    } catch (e) {
        return e.parent.detail
    } 
}


async function updateUsersocial(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var usso_ide = req.params.usso_ide;
    const { usso_user, usso_social,usso_url} = req.body;
    const updateusersocial = await usersocial_model.findAll({
        attributes: ['usso_ide','usso_user', 'usso_social','usso_url'],
        where:{
           usso_ide 
        }
    });
    if(updateusersocial.length > 0){
        return new Promise((resolve) => {
            updateusersocial.forEach(async usersocial_model => {
                var results = ''
                try {
                    var result = await (usersocial_model.update({
                                                    usso_user,
                                                    usso_social,
                                                    usso_url
                                            }));
                    results = 'Red social actualizada correctamente';
                } catch (e) {
                    results = e.parent.detail;
                }
                resolve(results)
            })
        })
    } else {
        return new Promise((resolve) => {
            resolve("Red social no encontrada")
        })
    }
}

async function deleteUsersocial(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    
    var usso_ide = req.params.usso_ide;
    return new Promise(async(resolve) => {
        try{
            var result = await (usersocial_model.destroy({
                where: {
                    usso_ide
                }
            }));
            if (result == 1) {
                resolve('red social eliminada correctamente')
            } else {
                resolve('red social no encontrada')
            }
        } catch (e) {
            resolve('Hubo errores en la eliminación de la red social')
        }
    })
}

async function listUsersocial(req, res) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    return new Promise(async(resolve) => {
        var result = await (usersocial_model.findAll())
        var usersocial = {};
        var count_usersocial = result.length;
        if (count_usersocial > 0) {
            for (var i = 0; i < result.length; i++) {
                var result_user = await (user_model.findAll({ where: { user_ide: result[i].usso_user } }))
                var result_social = await (social_model.findAll({ where: { soci_ide: result[i].usso_social } }))

                usersocial[i] = {};
                usersocial[i].ide = result[i].usso_ide;
                usersocial[i].user = result[i].usso_user;
                usersocial[i].social = result[i].usso_social;
                usersocial[i].url = result[i].usso_url;
                usersocial[i].user= {};
                usersocial[i].user.name = result_user[0].user_name;
                usersocial[i].social = {};
                usersocial[i].social.description = result_social[0].soci_description;
            }
            resolve(usersocial)
        } else {
            resolve('No hay ninguna red social para mostrar')
        }   
    })

}

async function getUsersocialById(req, id) {
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    var usso_ide = id;
    return new Promise(async(resolve) => {
        var result = await (usersocial_model.findAll({ where: { usso_ide:  usso_ide } }))
        var count_usersocial = result.length;
        if (count_usersocial > 0) {
            resolve(result)
        } else {
            resolve('No hay ninguna red social para mostrar')
        }
        return result
    })
}


module.exports.createUsersocial = createUsersocial
module.exports.updateUsersocial = updateUsersocial
module.exports.deleteUsersocial = deleteUsersocial
module.exports.listUsersocial = listUsersocial
module.exports.getUsersocialById = getUsersocialById