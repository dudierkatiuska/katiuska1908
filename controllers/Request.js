'use strict'
var request_model = require('../models/request.js')
var accesstypeuser_model = require('../models/accesstypeuser.js')
var access_model = require('../models/access.js')
var user_model = require('../models/user.js')
var usertype_model = require('../models/usertype.js')
const { checkToken } = require('../config/tokens') 

async function createRequest(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    const data = {
        "requ_description" : req.body.description,
        "requ_dtcreation" : req.body.dtcreation,
        "requ_message" : req.body.message,
        "requ_emisor" : req.body.emisor,
        "requ_receptor" : req.body.receptor
    }
    try{
        var result = await(request_model.create(data))
        return 'Se creo la solicitud en vivo correctamente'
    } catch (e) {
        return e.parent.detail
    }
}


async function updateRequest(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var requ_ide = req.params.requ_ide;
    const { requ_description, requ_dtcreation,requ_message,requ_emisor,requ_receptor} = req.body;
    const updaterequest = await request_model.findAll({
        attributes: ['requ_ide','requ_description', 'requ_dtcreation','requ_message','requ_emisor','requ_receptor'],
        where:{
           requ_ide 
        }
    });
    if(updaterequest.length > 0){
        return new Promise((resolve) => {
            updaterequest.forEach(async request_model => {
                var results = ''
                try {
                    var result = await (request_model.update({
                                                    requ_description,
                                                    requ_dtcreation,
                                                    requ_message,
                                                    requ_emisor,
                                                    requ_receptor
                                            }));
                    results = 'solicitud actualizada correctamente';
                } catch (e) {
                    results = e.parent.detail;
                }
                resolve(results)
            })
        })
    } else {
        return new Promise((resolve) => {
            resolve("solicitud no encontrada")
        })
    }
}

async function deleteRequest(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    var requ_ide = req.params.requ_ide;
    return new Promise(async(resolve) => {
        try{
            var result = await (request_model.destroy({
                where: {
                    requ_ide
                }
            }));
            if (result == 1) {
                resolve('se elimino la solicitud correctamente')
            } else {
                resolve('solicitud no encontrada')
            }
        } catch (e) {
            resolve('Hubo errores en la eliminación de la solicitud')
        }
    })
}

async function listRequest(req, res) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    return new Promise(async(resolve) => {
        var result = await (request_model.findAll())
        var request = {};
        var count_request = result.length;
        if (count_request > 0) {
            for (var i = 0; i < result.length; i++) {
                var result_accesstypeuser_sender = await (accesstypeuser_model.findAll({ where: { actu_ide: result[i].requ_emisor } }))
                var result_accesstypeuser_receiver = await (accesstypeuser_model.findAll({ where: { actu_ide: result[i].requ_receptor } }))
                var result_usertype_sender = await (usertype_model.findAll({ where: { usty_ide: result_accesstypeuser_sender[0].actu_usty } }))
                var result_usertype_receiver = await (usertype_model.findAll({ where: { usty_ide: result_accesstypeuser_receiver[0].actu_usty } }))
                var result_access_sender = await (access_model.findAll({ where: { acce_ide: result_accesstypeuser_sender[0].actu_acce } }))
                var result_access_receiver = await (access_model.findAll({ where: { acce_ide: result_accesstypeuser_receiver[0].actu_acce } }))
                var result_user_sender = await (user_model.findAll({ where: { user_ide: result_access_sender[0].acce_user } }))
                var result_user_receiver = await (user_model.findAll({ where: { user_ide: result_access_receiver[0].acce_user } }))
        
                request[i] = {};
                request[i].ide = result[i].requ_ide;
                request[i].description = result[i].requ_description;
                request[i].dtcreation = result[i].requ_dtcreation;
                request[i].message = result[i].requ_message;
                request[i].emisor = result[i].requ_emisor;
                request[i].receptor = result[i].requ_receptor;
                request[i].usertype = {};
                request[i].usertype.sender = {}
                request[i].usertype.sender.description = result_usertype_sender[0].usty_description;
                request[i].usertype.sender.name = result_user_sender[0].user_name;
                request[i].usertype.receiver = {}
                request[i].usertype.receiver.description = result_usertype_receiver[0].usty_description;
                request[i].usertype.receiver.name = result_user_receiver[0].user_name;
            }
            resolve(request)
        } else {
            resolve('No hay ninguna solicitud para mostrar')
        }   
    })
}

async function getRequestById(req, id) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    var requ_ide = id;
    return new Promise(async(resolve) => {
        var result = await (request_model.findAll({ where: { requ_ide:  requ_ide } }))
        var count_request = result.length;
        if (count_request > 0) {
            resolve(result)
        } else {
            resolve('No hay ninguna solicitud para mostrar')
        }
        return result
    })
}

module.exports.createRequest = createRequest
module.exports.updateRequest = updateRequest
module.exports.deleteRequest = deleteRequest
module.exports.listRequest = listRequest
module.exports.getRequestById = getRequestById