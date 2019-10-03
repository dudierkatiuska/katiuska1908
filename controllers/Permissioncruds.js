'use strict'
var permissioncrud_model = require('../models/permissioncrud.js')
const { checkToken } = require('../config/tokens')

async function createPermissioncrud(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    const data = {
        "pecr_description" : req.body.description,
        "pecr_url" : req.body.url,
        "pecr_icon" : req.body.icon,
    }
    try{
        var result = await(permissioncrud_model.create(data))
        return 'Se creo el permiso crud correctamente'
    } catch (e) {
        return e.parent.detail
    } 
}

async function updatePermissioncrud(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var pecr_ide = req.params.pecr_ide;
    const { pecr_description, pecr_url, pecr_icon} = req.body;
    const updatepermissioncrud = await permissioncrud_model.findAll({
        attributes: ['pecr_ide','pecr_description', 'pecr_url','pecr_icon'],
        where:{
           pecr_ide 
        }
    });
    if(updatepermissioncrud.length > 0){
        return new Promise((resolve) => {
            updatepermissioncrud.forEach(async permissioncrud_model => {
                var results = ''
                try {
                    var result = await (permissioncrud_model.update({
                                                        pecr_description,
                                                        pecr_url,
                                                        pecr_icon
                                            }));
                    results = 'Permiso crud actualizado correctamente';
                } catch (e) {
                    results = e.parent.detail;
                }
                resolve(results)
            })
        })
    } else {
        return new Promise((resolve) => {
            resolve("Permiso crud no encontrado")
        })
    }        
}

async function deletePermissioncrud(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    
    var pecr_ide = req.params.pecr_ide;
    return new Promise(async(resolve) => {
        try{
            var result = await (permissioncrud_model.destroy({
                where: {
                    pecr_ide
                }
            }));
            if (result == 1) {
                resolve('Permisio crud eliminado correctamente')
            } else {
                resolve('Permisio crud no encontrado')
            }
        } catch (e) {
            resolve('Hubo errores en la eliminación del Permisio crud')
        }
    })
}

async function listPermissioncrud(req, res) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    return new Promise(async(resolve) => {
        var result = await(permissioncrud_model.findAll())
        var count_permissioncrud = result.length;
        if (count_permissioncrud > 0) {
            resolve(result)
        } else {
            resolve('No hay ningún Permisio crud para mostrar')
        }
    });
}


async function getPermissioncrudById(req, id) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var pecr_ide = id;
    return new Promise(async(resolve) => {
        var result = await (permissioncrud_model.findAll({ where: { pecr_ide:  pecr_ide } }))
        var count_permissioncrud = result.length;
        if (count_permissioncrud > 0) {
            resolve(result)
        } else {
            resolve('No hay ningún Permisio crud para mostrar')
        }
        return result
    })
}

module.exports.createPermissioncrud = createPermissioncrud
module.exports.updatePermissioncrud = updatePermissioncrud
module.exports.deletePermissioncrud = deletePermissioncrud
module.exports.listPermissioncrud = listPermissioncrud
module.exports.getPermissioncrudById = getPermissioncrudById