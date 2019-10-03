'use strict'
var userlanguage_model = require('../models/userlanguage.js')
var user_model = require('../models/user.js')
var language_model = require('../models/language.js')
const { checkToken } = require('../config/tokens')

async function createUserlanguage(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    const data = {
        "usla_user" : req.body.user,
        "usla_lang" : req.body.lang
    }
    try{
        var result = await(userlanguage_model.create(data))
        return 'Se creo la relacion usuario-lenguaje correctamente'
    } catch (e) {
        return e.parent.detail
    }
}


async function updateUserlanguage(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var usla_ide = req.params.usla_ide;
    const { usla_user, usla_lang} = req.body;
    const updateuserlanguage = await userlanguage_model.findAll({
        attributes: ['usla_ide','usla_user', 'usla_lang'],
        where:{
           usla_ide 
        }
    });
    if(updateuserlanguage.length > 0){
        return new Promise((resolve) => {
            updateuserlanguage.forEach(async userlanguage_model => {
                var results = ''
                try {
                    var result = await (userlanguage_model.update({
                                                        usla_user,
                                                        usla_lang
                                            }));
                    results = 'relacion usuario lenguaje actualizado correctamente';
                } catch (e) {
                    results = e.parent.detail;
                }
                resolve(results)
            })
        })
    } else {
        return new Promise((resolve) => {
            resolve("relacion usuario lenguaje no encontrado")
        })
    }
}

async function deleteUserlanguage(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    
    var usla_ide = req.params.usla_ide;
    return new Promise(async(resolve) => {
        try{
            var result = await (userlanguage_model.destroy({
                where: {
                    usla_ide
                }
            }));
            if (result == 1) {
                resolve('relacion usuario lenguaje  eliminado correctamente')
            } else {
                resolve('relacion usuario lenguaje no encontrada')
            }
        } catch (e) {
            resolve('Hubo errores en la eliminación de la relacion usuario lenguaje')
        }
    })
}

async function listUserlanguage(req, res) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    return new Promise(async(resolve) => {
        var result = await (userlanguage_model.findAll())
        var userlanguage = {};
        var count_userlanguage = result.length;
        if (count_userlanguage > 0) {
            for (var i = 0; i < result.length; i++) {
                var result_user = await (user_model.findAll({ where: { user_ide: result[i].usla_user } }))
                var result_language = await (language_model.findAll({ where: { lang_ide: result[i].usla_lang } }))

                userlanguage[i] = {};
                userlanguage[i].ide = result[i].usla_ide;
                userlanguage[i].user = result[i].usla_user;
                userlanguage[i].lang = result[i].usla_lang;
                userlanguage[i].user= {};
                userlanguage[i].user.name = result_user[0].user_name;
                userlanguage[i].social = {};
                userlanguage[i].social.description = result_language[0].lang_description;
            }
            resolve(userlanguage)
        } else {
            resolve('No hay ninguna relacion usuario lenguaje para mostrar')
        }   
    })
}


async function getUserlanguageById(req, id) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    var usla_ide = id;
    return new Promise(async(resolve) => {
        var result = await (userlanguage_model.findAll({ where: { usla_ide:  usla_ide } }))
        var count_userlanguage = result.length;
        if (count_userlanguage > 0) {
            resolve(result)
        } else {
            resolve('No hay ninguna  relacion usuario lenguaje para mostrar')
        }
        return result
    })
}


module.exports.createUserlanguage = createUserlanguage
module.exports.updateUserlanguage = updateUserlanguage
module.exports.deleteUserlanguage = deleteUserlanguage
module.exports.listUserlanguage = listUserlanguage
module.exports.getUserlanguageById = getUserlanguageById