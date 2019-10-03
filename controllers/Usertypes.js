'use strict'
var usertype_model = require('../models/usertype.js')
const { checkToken } = require('../config/tokens')

async function createUsertype(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    const data = {
        "usty_description" : req.body.description,
        "usty_status" : req.body.status,
    }
    try{
        var result = await(usertype_model.create(data))
        return 'Se creo el tipo de usuario correctamente'
    } catch (e) {
        return e.parent.detail
    }
}

async function updateUsertype(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var usty_ide = req.params.usty_ide;
    const { usty_description, usty_status} = req.body;
    const updateusertype = await usertype_model.findAll({
        attributes: ['usty_ide','usty_description', 'usty_status'],
        where:{
           usty_ide 
        }
    });
    if(updateusertype.length > 0){
        return new Promise((resolve) => {
            updateusertype.forEach(async usertype_model => {
                var results = ''
                try {
                    var result = await (usertype_model.update({
                                                    usty_description,
                                                    usty_status
                                            }));
                    results = 'Tipo de usuario actualizado correctamente';
                } catch (e) {
                    results = e.parent.detail;
                }
                resolve(results)
            })
        })
    } else {
        return new Promise((resolve) => {
            resolve("Tipo de usuario  no encontrado")
        })
    }
}

async function deleteUsertype(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    
    var usty_ide = req.params.usty_ide;
    return new Promise(async(resolve) => {
        try{
            var result = await (usertype_model.destroy({
                where: {
                    usty_ide
                }
            }));
            if (result == 1) {
                resolve('Tipo de usuario eliminado correctamente')
            } else {
                resolve('Tipo de usuario no encontrado')
            }
        } catch (e) {
            resolve('Hubo errores en la eliminación del Tipo de usuario')
        }
    })
}

async function listUsertype(req, res) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    return new Promise(async(resolve) => {
        var result = await(usertype_model.findAll())
        var count_usertype = result.length;
        if (count_usertype > 0) {
            resolve(result)
        } else {
            resolve('No hay ningún tipo de usuario para mostrar')
        }
    });
}


async function getUsertypeById(req, id) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    var usty_ide = id;
    return new Promise(async(resolve) => {
        var result = await (usertype_model.findAll({ where: { usty_ide:  usty_ide } }))
        var count_usertype = result.length;
        if (count_usertype > 0) {
            resolve(result)
        } else {
            resolve('No hay ningún tipo de usuario para mostrar')
        }
        return result
    })
}


module.exports.createUsertype = createUsertype
module.exports.updateUsertype = updateUsertype
module.exports.deleteUsertype = deleteUsertype
module.exports.listUsertype = listUsertype
module.exports.getUsertypeById = getUsertypeById