'use strict'
var submodule_model = require('../models/submodule.js')
var module_model = require('../models/module.js')
const { checkToken } = require('../config/tokens')


async function createSubmodule(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    const data = {
        "sumo_description" : req.body.description,
        "sumo_url" : req.body.url,
        "sumo_icon" : req.body.icon,
        "sumo_order" : req.body.order,
        "sumo_modu" : req.body.modu,

    }
    try{
        var result = await(submodule_model.create(data))
        return 'Se creo el submodulo correctamente'
    } catch (e) {
        return e.parent.detail
    }
}

async function updateSubmodule(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var sumo_ide = req.params.sumo_ide;
    const { sumo_description, sumo_url, sumo_icon, sumo_order, sumo_modu} = req.body;
    const updatesubmodule = await submodule_model.findAll({
        attributes: ['sumo_ide','sumo_description', 'sumo_url','sumo_icon','sumo_order','sumo_modu'],
        where:{
           sumo_ide 
        }
    });

    if(updatesubmodule.length > 0){
        return new Promise((resolve) => {
            updatesubmodule.forEach(async submodule_model =>{
                var results = ''
                try {
                    var result = await (submodule_model.update({
                                                    sumo_description,
                                                    sumo_url,
                                                    sumo_icon,
                                                    sumo_order,
                                                    sumo_modu
                                            }));
                    results = 'Submodulo actualizado correctamente';
                } catch (e) {
                    results = e.parent.detail;
                }
                resolve(results)
            })
        })
    } else {
        return new Promise((resolve) => {
            resolve("Submodulo no encontrado")
        })
    }
}

async function deleteSubmodule(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    
    var sumo_ide = req.params.sumo_ide;
    return new Promise(async(resolve) => {
        try{
            var result = await (submodule_model.destroy({
                where: {
                    sumo_ide
                }
            }));
            if (result == 1) {
                resolve('Submodulo eliminado correctamente')
            } else {
                resolve('Submodulo no encontrado')
            }
        } catch (e) {
            resolve('Hubo errores en la eliminación del Submodulo')
        }
    })
}

async function listSubmodule(req, res) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    return new Promise(async(resolve) => {
        var result = await (submodule_model.findAll())
        var submodule = {};
        var count_submodule = result.length;
        if (count_submodule > 0) {
            for (var i = 0; i < result.length; i++) {
                var result_module = await (module_model.findAll({ where: { modu_ide: result[i].sumo_modu } }))

                submodule[i] = {};
                submodule[i].ide = result[i].sumo_ide;
                submodule[i].description = result[i].sumo_description;
                submodule[i].url = result[i].sumo_url;
                submodule[i].icon = result[i].sumo_icon;
                submodule[i].order = result[i].sumo_order;
                submodule[i].modu = result[i].sumo_modu;
                submodule[i].module = {};
                submodule[i].module.description = result_module[0].modu_description;
            }
            resolve(submodule)
        } else {
            resolve('No hay ningún submodulo para mostrar')
        }   
    })
}


async function getSubmoduleById(req, id) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    var sumo_ide = id;
    return new Promise(async(resolve) => {
        var result = await (submodule_model.findAll({ where: { sumo_ide:  sumo_ide } }))
        var count_submodule = result.length;
        if (count_submodule > 0) {
            resolve(result)
        } else {
            resolve('No hay ningún submodulo para mostrar')
        }
        return result
    })
}

module.exports.createSubmodule = createSubmodule
module.exports.updateSubmodule = updateSubmodule
module.exports.deleteSubmodule = deleteSubmodule
module.exports.listSubmodule = listSubmodule
module.exports.getSubmoduleById = getSubmoduleById