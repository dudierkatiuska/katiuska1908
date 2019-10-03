'use strict'
var module_model = require('../models/module.js')
const { checkToken } = require('../config/tokens')

async function createModule(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    const data = {
        "modu_description" : req.body.description,
        "modu_visibility" : req.body.visibility,
        "modu_icon" : req.body.icon,

    }
    try{
        var result = await(module_model.create(data))
        return 'Se creo el modulo correctamente'
    } catch (e) {
        return e.parent.detail
    }
}

async function updateModule(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var modu_ide = req.params.modu_ide;
    const { modu_description, modu_visibility, modu_icon} = req.body;
    const updatemodule = await module_model.findAll({
        attributes: ['modu_ide','modu_description', 'modu_visibility','modu_icon'],
        where:{
           modu_ide 
        }
    });
    if(updatemodule.length > 0){
        return new Promise((resolve) => {
            updatemodule.forEach(async module_model => {
                var results = ''
                try {
                    var result = await (module_model.update({
                                                    modu_description,
                                                    modu_visibility,
                                                    modu_icon
                                            }));
                    results = 'Modulo actualizado correctamente';
                } catch (e) {
                    results = e.parent.detail;
                }
                resolve(results)
            })
        })
    } else {
        return new Promise((resolve) => {
            resolve("Modulo no encontrado")
        })
    }
}

async function deleteModule(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    
    var modu_ide = req.params.modu_ide;
    return new Promise(async(resolve) => {
        try{
            var result = await (module_model.destroy({
                where: {
                    modu_ide
                }
            }));
            if (result == 1) {
                resolve('Modulo eliminado correctamente')
            } else {
                resolve('Modulo no encontrado')
            }
        } catch (e) {
            resolve('Hubo errores en la eliminación del Modulo')
        }
    })
}

async function listModule(req, res) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    return new Promise(async(resolve) => {
        var result = await(module_model.findAll())
        var count_module = result.length;
        if (count_module > 0) {
            resolve(result)
        } else {
            resolve('No hay ningún module para mostrar')
        }
    });
}


async function getModuleById(req, id) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    var modu_ide = id;
    return new Promise(async(resolve) => {
        var result = await (module_model.findAll({ where: { modu_ide:  modu_ide } }))
        var count_module = result.length;
        if (count_module > 0) {
            resolve(result)
        } else {
            resolve('No hay ningún modulo para mostrar')
        }
        return result
    })
}


module.exports.createModule = createModule
module.exports.updateModule = updateModule
module.exports.deleteModule = deleteModule
module.exports.listModule = listModule
module.exports.getModuleById = getModuleById