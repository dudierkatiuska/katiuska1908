'use strict'
var video_model = require('../models/video.js')
var user_model = require('../models/user.js')
var accesstypeuser_model = require('../models/accesstypeuser.js')
var access_model = require('../models/access.js')
const { checkToken } = require('../config/tokens')


async function createVideo(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    const data = {
        "vide_description" : req.body.description,
        "vide_dtcreation" : req.body.dtcreation,
        "vide_actu" : req.body.actu,
        "vide_url" : req.body.url
    }
    try{
        var result = await(video_model.create(data))
        return 'Se creo el video correctamente'
    } catch (e) {
        return e.parent.detail
    }
}


async function updateVideo(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var vide_ide = req.params.vide_ide;
    const { vide_description, vide_dtcreation,vide_actu,vide_url} = req.body;
    const updatevideo = await video_model.findAll({
        attributes: ['vide_ide','vide_description', 'vide_dtcreation','vide_actu','vide_url'],
        where:{
           vide_ide 
        }
    });
    if(updatevideo.length > 0){
        return new Promise((resolve) => {
            updatevideo.forEach(async video_model => {
                var results = ''
                try {
                    var result = await (video_model.update({
                                                vide_description,
                                                vide_dtcreation,
                                                vide_actu,
                                                vide_url
                                            }));
                    results = 'Video actualizado correctamente';
                } catch (e) {
                    results = e.parent.detail;
                }
                resolve(results)
            })
        })
    } else {
        return new Promise((resolve) => {
            resolve("Video no encontrado")
        })
    }
}

async function deleteVideo(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    
    var vide_ide = req.params.vide_ide;
    return new Promise(async(resolve) => {
        try{
            var result = await (video_model.destroy({
                where: {
                    vide_ide
                }
            }));
            if (result == 1) {
                resolve('Video eliminado correctamente')
            } else {
                resolve('Video no encontrado')
            }
        } catch (e) {
            resolve('Hubo errores en la eliminación del Video')
        }
    })
}

async function listVideo(req, res) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    return new Promise(async(resolve) => {
        var result = await (video_model.findAll())
        var video = {};
        var count_video = result.length;
        if (count_video > 0) {
            for (var i = 0; i < result.length; i++) {
                var result_accesstypeuser= await (accesstypeuser_model.findAll({ where: { actu_ide: result[i].vide_actu } }))
                var result_access = await (access_model.findAll({ where: { acce_ide: result_accesstypeuser[0].actu_acce } }))
                var result_user = await (user_model.findAll({ where: { user_ide: result_access[0].acce_user } }))

                video[i] = {};
                video[i].ide = result[i].vide_ide;
                video[i].description = result[i].vide_description;
                video[i].dtcreation = result[i].vide_dtcreation;
                video[i].actu = result[i].vide_actu;
                video[i].user = {};
                video[i].user.name = result_user[0].user_name;
            }
            resolve(video)
        } else {
            resolve('No hay ningún video para mostrar')
        }   
    })
}

async function getVideoById(req, id) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    var vide_ide = id;
    return new Promise(async(resolve) => {
        var result = await (video_model.findAll({ where: { vide_ide:  vide_ide } }))
        var count_video = result.length;
        if (count_video > 0) {
            resolve(result)
        } else {
            resolve('No hay ningún video para mostrar')
        }
        return result
    })
}


module.exports.createVideo = createVideo
module.exports.updateVideo = updateVideo
module.exports.deleteVideo = deleteVideo
module.exports.listVideo = listVideo
module.exports.getVideoById = getVideoById