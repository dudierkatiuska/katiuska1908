'use strict'
var accesstypeuser_model = require('../models/accesstypeuser.js')
var usertype_model = require('../models/usertype.js')
var specialities_model = require('../models/specialities.js')
const { checkToken } = require('../config/tokens')

async function createAccesstypeuser(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    const data = {
        "actu_acce" : req.body.acce,
        "actu_usty" : req.body.usty,
        "actu_spec" : req.body.spec,
    }    
    try{
        var result = await(accesstypeuser_model.create(data))
        return 'Se creo el acceso por tipo de usuario correctamente'
    } catch (e) {
        return e.parent.detail
    } 
}


async function updateAccesstypeuser(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    var actu_ide = req.params.actu_ide;
    const { actu_acce, actu_usty,actu_spec} = req.body;
    const updateaccesstypeuser = await accesstypeuser_model.findAll({
        attributes: ['actu_ide','actu_acce', 'actu_usty','actu_spec'],
        where:{
           actu_ide 
        }
    });
    if(updateaccesstypeuser.length > 0){    
        return new Promise((resolve) => {
            updateaccesstypeuser.forEach(async accesstypeuser_model =>{
                var results = ''
                try {
                    var result = await (accesstypeuser_model.update({
                                                    actu_acce,
                                                    actu_usty,
                                                    actu_spec
                                            }));
                    results = 'Acceso tipo de usuario actualizado correctamente';
                } catch (e) {
                    results = e.parent.detail;
                }
                resolve(results)
            })
        })
    } else {
        return new Promise((resolve) => {
            resolve("Acceso por tipo de usuario no encontrado")
        })
    }
}

async function deleteAccesstypeuser(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    var actu_ide = req.params.actu_ide;
    return new Promise(async(resolve) => {
        try{
            var result = await (accesstypeuser_model.destroy({
                where: {
                    actu_ide
                }
            }));
            if (result == 1) {
                resolve('Se eliminó el acceso por tipo de usuario  correctamente')
            } else {
                resolve('Acceso por tipo de usuario no encontrado')
            }
        } catch (e) {
            resolve('Hubo errores en la eliminación del acceso por tipo de usuario ')
        }
    })
}

async function listAccesstypeuser(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    return new Promise(async(resolve) => {
        var result = await (accesstypeuser_model.findAll())
        var accesstypeuser = {};
        var count_accesstypeuser = result.length;
        if (count_accesstypeuser > 0) {
            for (var i = 0; i < result.length; i++) {
                var result_usertype = await (usertype_model.findAll({ where: { usty_ide: result[i].actu_usty } }))
                var result_specialities = await (specialities_model.findAll({ where: { spec_ide: result[i].actu_spec } }))
                
        
                accesstypeuser[i] = {};
                accesstypeuser[i].ide = result[i].actu_ide;
                accesstypeuser[i].acce = result[i].actu_acce;
                accesstypeuser[i].usty = result[i].actu_usty;
                accesstypeuser[i].spec = result[i].actu_spec;
                accesstypeuser[i].usertype = {};
                accesstypeuser[i].usertype.description = result_usertype[0].usty_description;
                accesstypeuser[i].specialities = {};
                accesstypeuser[i].specialities.description = result_specialities[0].spec_description;
            }
            resolve(accesstypeuser)
        } else {
            resolve('No hay ningún acceso por tipo de usuario para mostrar')
        }
        
    })
}

async function getAccesstypeuserById(req, id) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    var actu_ide = id;
    return new Promise(async(resolve) => {
        var result = await (accesstypeuser_model.findAll({ where: { actu_ide:  actu_ide } }))
        var count_accesstypeuser = result.length;
        if (count_accesstypeuser > 0) {
            resolve(result)
        } else {
            resolve('No hay ningún acceso por tipo de asuario para mostrar')
        }
        return result
    })
}


module.exports.createAccesstypeuser = createAccesstypeuser
module.exports.updateAccesstypeuser = updateAccesstypeuser
module.exports.deleteAccesstypeuser = deleteAccesstypeuser
module.exports.listAccesstypeuser = listAccesstypeuser
module.exports.getAccesstypeuserById = getAccesstypeuserById