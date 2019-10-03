'use strict'
var liveevents_model = require('../models/liveevents.js')
var video_model = require('../models/video.js')
var accesstypeuser_model = require('../models/accesstypeuser.js')
var access_model = require('../models/access.js')
var user_model = require('../models/user.js')
const { checkToken } = require('../config/tokens')

async function createLiveevents(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    const data = {
        "live_description" : req.body.description,
        "live_dtcreation" : req.body.dtcreation,
        "live_video" : req.body.video,
        "live_actu" : req.body.actu,
        "live_participants" : req.body.participants,
        "live_request" : req.body.request
    }
    try{
        var result = await(liveevents_model.create(data))
        return 'Se creo el evento en vivo correctamente'
    } catch (e) {
        return e.parent.detail
    } 
}


async function updateLiveevents(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var live_ide = req.params.live_ide;
    const { live_description, live_dtcreation,live_video,live_actu,live_participants,live_request} = req.body;
    const updateliveevents = await liveevents_model.findAll({
        attributes: ['live_ide','live_description', 'live_dtcreation','live_video','live_actu','live_participants','live_request'],
        where:{
           live_ide 
        }
    });
    if(updateliveevents.length > 0){
        return new Promise((resolve) => {
            updateliveevents.forEach(async liveevents_model => {
                var results = ''
                try {
                    var result = await (liveevents_model.update({
                                                    live_description,
                                                    live_dtcreation,
                                                    live_video,
                                                    live_actu,
                                                    live_participants,
                                                    live_request
                                            }));
                    results = 'evento en vivo  actualizado correctamente';
                } catch (e) {
                    results = e.parent.detail;
                }
                resolve(results)
            })
        })
    } else {
        return new Promise((resolve) => {
            resolve("evento en vivo no encontrado")
        })
    }
}

async function deleteLiveevents(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    var live_ide = req.params.live_ide;
    return new Promise(async(resolve) => {
        try{
            var result = await (liveevents_model.destroy({
                where: {
                    live_ide
                }
            }));
            if (result == 1) {
                resolve('evento en vivo eliminado correctamente')
            } else {
                resolve('evento en vivo no encontrado')
            }
        } catch (e) {
            resolve('Hubo errores en la eliminación del evento en vivo')
        }
    })
}



async function listLiveevents(req, res) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    return new Promise(async(resolve) => {
        var result = await (liveevents_model.findAll())
        var liveevents = {};
        var count_liveevents = result.length;
        if (count_liveevents > 0) {
            for (var i = 0; i < result.length; i++) {
                var result_video= await (video_model.findAll({ where: { vide_ide: result[i].live_video } }))
                var result_accesstypeuser= await (accesstypeuser_model.findAll({ where: { actu_ide: result[i].live_actu } }))
                var result_access = await (access_model.findAll({ where: { acce_ide: result_accesstypeuser[0].actu_acce } }))
                var result_user = await (user_model.findAll({ where: { user_ide: result_access[0].acce_user } }))
                liveevents[i] = {};
                liveevents[i].ide = result[i].live_ide;
                liveevents[i].description = result[i].live_description;
                liveevents[i].dtcreation = result[i].live_dtcreation;
                liveevents[i].video = result[i].live_video;
                liveevents[i].actu = result[i].live_actu;
                liveevents[i].participants = result[i].live_participants;
                liveevents[i].request = result[i].live_request;
                liveevents[i].user = {};
                liveevents[i].user.name = result_user[0].user_name;
                liveevents[i].video = {};
                liveevents[i].video.description = result_video[0].vide_description;
            }
            resolve(liveevents)
        } else {
            resolve('No hay ningún evento en vivo para mostrar')
        }   
    })
}

async function getLiveeventsById(req, id) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    var live_ide = id;
    return new Promise(async(resolve) => {
        var result = await (liveevents_model.findAll({ where: { live_ide:  live_ide } }))
        var count_liveevents = result.length;
        if (count_liveevents > 0) {
            resolve(result)
        } else {
            resolve('No hay ningún envento en vivo para mostrar')
        }
        return result
    })
}


module.exports.createLiveevents = createLiveevents
module.exports.updateLiveevents = updateLiveevents
module.exports.deleteLiveevents = deleteLiveevents
module.exports.listLiveevents = listLiveevents
module.exports.getLiveeventsById = getLiveeventsById