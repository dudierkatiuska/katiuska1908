'use strict'
var social_model = require('../models/social.js')
const user = require('../models/user.js')
const { checkToken } = require('../config/tokens') 

async function createSocial(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    const data = {
        "soci_description" : req.body.description,
        "soci_icon" : req.body.icon
    }
    try{
        var result = await(social_model.create(data))
        return 'Se creo la red social correctamente'
    } catch (e) {
        return e.parent.detail
    }
}


async function updateSocial(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var soci_ide = req.params.soci_ide;
    const { soci_description, soci_icon} = req.body;
    const updatesocial = await social_model.findAll({
        attributes: ['soci_ide','soci_description', 'soci_icon'],
        where:{
           soci_ide 
        }
    });
    if(updatesocial.length > 0){
        return new Promise((resolve) => {
            updatesocial.forEach(async social_model => {
                var results = ''
                try {
                    var result = await (social_model.update({
                                                    soci_description,
                                                    soci_icon
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

async function deleteSocial(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    var soci_ide = req.params.soci_ide;
    return new Promise(async(resolve) => {
        try{
            var result = await (social_model.destroy({
                where: {
                    soci_ide
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

async function listSocial(req, res) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    return new Promise(async(resolve) => {
        var result = await(social_model.findAll())
        var count_social = result.length;
        if (count_social > 0) {
            resolve(result)
        } else {
            resolve('No hay ninguna red social para mostrar')
        }
    });
}

async function getSocialById(req, id) 
{   
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    var soci_ide = id;
    return new Promise(async(resolve) => {
        var result = await (social_model.findAll({ where: { soci_ide:  soci_ide } }))
        var count_social = result.length;
        if (count_social > 0) {
            resolve(result)
        } else {
            resolve('No hay ninguna red social para mostrar')
        }
        return result
    })
}

module.exports.createSocial = createSocial
module.exports.updateSocial = updateSocial
module.exports.deleteSocial = deleteSocial
module.exports.listSocial = listSocial
module.exports.getSocialById = getSocialById