'use strict'
var permission_model = require('../models/permission.js')
var permissioncrud_model = require('../models/permissioncrud.js')
var submodule_model = require('../models/submodule.js')
const { checkToken } = require('../config/tokens')

async function createPermission(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    
    const data = {
        "perm_actu" : req.body.actu,
        "perm_sumo" : req.body.sumo,
        "perm_pecr" : req.body.pecr,
        "perm_status" : req.body.status,
    }
    try{
        var result = await(permission_model.create(data))
        return 'Se creo el permiso correctamente'
    } catch (e) {
        return e.parent.detail
    }
}


async function updatePermission(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var perm_ide = req.params.perm_ide;
    const { perm_actu, perm_sumo, perm_pecr, perm_status} = req.body;
    const updatepermission = await permission_model.findAll({
        attributes: ['perm_ide','perm_actu', 'perm_sumo','perm_pecr','perm_status'],
        where:{
           perm_ide 
        }
    });
    if(updatepermission.length > 0){
        return new Promise((resolve) => {
            updatepermission.forEach(async permission_model => {
                var results = ''
                try {
                    var result = await (permission_model.update({
                                                        perm_actu,
                                                        perm_sumo,
                                                        perm_pecr,
                                                        perm_status
                                            }));
                    results = 'Permiso actualizado correctamente';
                } catch (e) {
                    results = e.parent.detail;
                }
                resolve(results)
            })
        })
    } else {
        return new Promise((resolve) => {
            resolve("Permiso no encontrado")
        })
    }
}

async function deletePermission(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    
    var perm_ide = req.params.perm_ide;
    return new Promise(async(resolve) => {
        try{
            var result = await (permission_model.destroy({
                where: {
                    perm_ide
                }
            }));
            if (result == 1) {
                resolve('Permiso eliminado correctamente')
            } else {
                resolve('Permiso no encontrado')
            }
        } catch (e) {
            resolve('Hubo errores en la eliminación del Permiso')
        }
    })
}

async function listPermission(req, res) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    
    return new Promise(async(resolve) => {
        var result = await (permission_model.findAll())
        var permission = {};
        var count_permission = result.length;
        if (count_permission > 0) {
            for (var i = 0; i < result.length; i++) {
                var result_permission = await (permissioncrud_model.findAll({ where: { pecr_ide: result[i].perm_pecr } }))
                var result_submodule = await (submodule_model.findAll({ where: { sumo_ide: result[i].perm_sumo } }))
        
                permission[i] = {};
                permission[i].ide = result[i].perm_ide;
                permission[i].actu = result[i].perm_actu;
                permission[i].sumo = result[i].perm_sumo;
                permission[i].pecr = result[i].perm_pecr;
                permission[i].status = result[i].perm_status;
                permission[i].permissioncrud = {};
                permission[i].permissioncrud.description = result_permission[0].pecr_description;
                permission[i].submodule = {};
                permission[i].submodule.description = result_submodule[0].sumo_description;
            }
            resolve(permission)
        } else {
            resolve('No hay ningún permiso para mostrar')
        }   
    })
}


async function getPermissionById(req, id) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var perm_ide = id;
    return new Promise(async(resolve) => {
        var result = await (permission_model.findAll({ where: { perm_ide:  perm_ide } }))
        var count_permission = result.length;
        if (count_permission > 0) {
            resolve(result)
        } else {
            resolve('No hay ningún Permiso para mostrar')
        }
        return result
    })
}

module.exports.createPermission = createPermission
module.exports.updatePermission = updatePermission
module.exports.deletePermission = deletePermission
module.exports.listPermission = listPermission
module.exports.getPermissionById = getPermissionById