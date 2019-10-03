'use strict'
var language_model = require('../models/language.js')
const { checkToken } = require('../config/tokens')


async function createLanguage(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    const data = {
        "lang_description" : req.body.description,
        "lang_status" : req.body.status
    }
    try{
        var result = await(language_model.create(data))
        return 'Se creo el lenguaje correctamente'
    } catch (e) {
        return e.parent.detail
    } 
}



async function updateLanguage(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var lang_ide = req.params.lang_ide;
    const { lang_description, lang_status} = req.body;
    const updatelanguage = await language_model.findAll({
        attributes: ['lang_ide','lang_description', 'lang_status'],
        where:{
           lang_ide 
        }
    });
    if(updatelanguage.length > 0){
        return new Promise((resolve) => {
            updatelanguage.forEach(async language_model => {
                var results = ''
                try {
                    var result = await (language_model.update({
                                                    lang_description,
                                                    lang_status
                                            }));
                    results = 'Lenguaje actualizado correctamente';
                } catch (e) {
                    results = e.parent.detail;
                }
                resolve(results)
            })
        })
    } else {
        return new Promise((resolve) => {
            resolve("Lenguaje no encontrado")
        })
    }
}



async function deleteLanguage(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var lang_ide = req.params.lang_ide;
    return new Promise(async(resolve) => {
        try{
            var result = await (language_model.destroy({
                where: {
                    lang_ide
                }
            }));
            if (result == 1) {
                resolve('Lenguaje eliminado correctamente')
            } else {
                resolve('Lenguaje no encontrado')
            }
        } catch (e) {
            resolve('Hubo errores en la eliminación del Lenguaje')
        }
    })
}


async function listLanguage(req, res) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    return new Promise(async(resolve) => {
        var result = await(language_model.findAll())
        var count_language = result.length;
        if (count_language > 0) {
            resolve(result)
        } else {
            resolve('No hay ningún lenguaje para mostrar')
        }
    });
}


async function getLanguageById(req, id) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    } 
    
    var lang_ide = id;
    return new Promise(async(resolve) => {
        var result = await (language_model.findAll({ where: { lang_ide:  lang_ide } }))
        var count_languages = result.length;
        if (count_languages > 0) {
            resolve(result)
        } else {
            resolve('No hay ningún lenguaje para mostrar')
        }
        return result
    })
}


module.exports.createLanguage = createLanguage
module.exports.updateLanguage = updateLanguage
module.exports.deleteLanguage = deleteLanguage
module.exports.listLanguage = listLanguage
module.exports.getLanguageById = getLanguageById