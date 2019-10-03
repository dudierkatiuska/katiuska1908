'use strict'
var codepromotion_model = require('../models/codepromotion.js')
const { checkToken } = require('../config/tokens')

async function createCodepromotion(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    const data = {
        "copr_description" : req.body.description,
        "copr_ticket" : req.body.ticket,
    }
    try{
        var result = await(codepromotion_model.create(data))
        return 'Se creo el codigo de promoción correctamente'
    } catch (e) {
        return e.parent.detail
    } 
}


async function updateCodepromotion(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var copr_ide = req.params.copr_ide;
    const { copr_description, copr_ticket} = req.body;
    const updatecodepromotion = await codepromotion_model.findAll({
        attributes: ['copr_ide','copr_description', 'copr_ticket'],
        where:{
           copr_ide 
        }
    });
    if(updatecodepromotion.length > 0){
        return new Promise((resolve) => {
            updatecodepromotion.forEach(async codepromotion_model => {
                var results = ''
                try {
                    var result = await (codepromotion_model.update({
                                                    copr_description,
                                                    copr_ticket
                                            }));
                    results = 'El codigo de promoción se actualizo correctamente';
                } catch (e) {
                    results = e.parent.detail;
                }
                resolve(results)
            })
        })
    } else {
        return new Promise((resolve) => {
            resolve("codigo de promoción no encontrado")
        })
    }
}


async function deleteCodepromotion(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var copr_ide = req.params.copr_ide;
    return new Promise(async(resolve) => {
        try{
            var result = await (codepromotion_model.destroy({
                where: {
                    copr_ide
                }
            }));
            if (result == 1) {
                resolve('El codigo de promoción se eliminado correctamente')
            } else {
                resolve('codigo de promoción no encontrado')
            }
        } catch (e) {
            resolve('Hubo errores en la eliminación del codigo de promoción')
        }
    })
}


async function listCodepromotion(req, res) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    return new Promise(async(resolve) => {
        var result = await(codepromotion_model.findAll())
        var count_codepromotion = result.length;
        if (count_codepromotion > 0) {
            resolve(result)
        } else {
            resolve('No hay ningún codigo de promoción para mostrar')
        }
    });
}

async function getCodepromotionById(req, id) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var copr_ide = id;
    return new Promise(async(resolve) => {
        var result = await (codepromotion_model.findAll({ where: { copr_ide:  copr_ide } }))
        var count_codepromotion = result.length;
        if (count_codepromotion > 0) {
            resolve(result)
        } else {
            resolve('No hay ningún codigo de promoción para mostrar')
        }
        return result
    })
}



module.exports.createCodepromotion = createCodepromotion
module.exports.updateCodepromotion = updateCodepromotion
module.exports.deleteCodepromotion = deleteCodepromotion
module.exports.listCodepromotion = listCodepromotion
module.exports.getCodepromotionById = getCodepromotionById