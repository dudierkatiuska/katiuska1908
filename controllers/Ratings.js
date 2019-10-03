'use strict'
var rating_model = require('../models/rating.js')
var video_model = require('../models/video.js')
var accesstypeuser_model = require('../models/accesstypeuser.js')
var access_model = require('../models/access.js')
var user_model = require('../models/user.js')
const { checkToken } = require('../config/tokens') 


async function createRating(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    const data = {
        "rati_valor" : req.body.valor,
        "rati_video" : req.body.video,
        "rati_actu" : req.body.actu,
        "rati_dtcreation" : req.body.dtcreation
    }
    try{
        var result = await(rating_model.create(data))
        return 'Se creo el rating correctamente'
    } catch (e) {
        return e.parent.detail
    }
}


async function updateRating(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    
    var rati_ide = req.params.rati_ide;
    const { rati_valor, rati_video,rati_actu,rati_dtcreation} = req.body;
    const updaterating = await rating_model.findAll({
        attributes: ['rati_ide','rati_valor', 'rati_video','rati_actu','rati_dtcreation'],
        where:{
           rati_ide 
        }
    });
    if(updaterating.length > 0){
        return new Promise((resolve) => {
            updaterating.forEach(async rating_model => {
                var results = ''
                try {
                    var result = await (rating_model.update({
                                                        rati_valor,
                                                        rati_video,
                                                        rati_actu,
                                                        rati_dtcreation
                                            }));
                    results = 'Ratings actualizado correctamente';
                } catch (e) {
                    results = e.parent.detail;
                }
                resolve(results)
            })
        })
    } else {
        return new Promise((resolve) => {
            resolve("Ratings no encontrado")
        })
    }
}

async function deleteRating(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    var rati_ide = req.params.rati_ide;
    return new Promise(async(resolve) => {
        try{
            var result = await (rating_model.destroy({
                where: {
                    rati_ide
                }
            }));
            if (result == 1) {
                resolve('Rating eliminado correctamente')
            } else {
                resolve('Rating no encontrado')
            }
        } catch (e) {
            resolve('Hubo errores en la eliminación del Rating')
        }
    })
}

async function listRating(req, res) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    
    return new Promise(async(resolve) => {
        var result = await (rating_model.findAll())
        var rating = {};
        var count_rating = result.length;
        if (count_rating > 0) {
            for (var i = 0; i < result.length; i++) {
                var result_video= await (video_model.findAll({ where: { vide_ide: result[i].rati_video } }))
                var result_accesstypeuser= await (accesstypeuser_model.findAll({ where: { actu_ide: result[i].rati_actu } }))
                var result_access = await (access_model.findAll({ where: { acce_ide: result_accesstypeuser[0].actu_acce } }))
                var result_user = await (user_model.findAll({ where: { user_ide: result_access[0].acce_user } }))
        
                rating[i] = {};
                rating[i].ide = result[i].rati_ide;
                rating[i].valor = result[i].rati_valor;
                rating[i].video = result[i].rati_video;
                rating[i].actu = result[i].rati_actu;
                rating[i].dtcreation = result[i].rati_dtcreation;
                rating[i].user = {};
                rating[i].user.name = result_user[0].user_name;
                rating[i].video = {};
                rating[i].video.description = result_video[0].vide_description;
            }
            resolve(rating)
        } else {
            resolve('No hay ningún rating para mostrar')
        }   
    })
}


async function getRatingById(req, id) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    var rati_ide = id;
    return new Promise(async(resolve) => {
        var result = await (rating_model.findAll({ where: { rati_ide:  rati_ide } }))
        var count_rating = result.length;
        if (count_rating > 0) {
            resolve(result)
        } else {
            resolve('No hay ningún rating para mostrar')
        }
        return result
    })
}

module.exports.createRating = createRating
module.exports.updateRating = updateRating
module.exports.deleteRating = deleteRating
module.exports.listRating = listRating
module.exports.getRatingById = getRatingById