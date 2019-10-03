'use strict'
var country_model = require('../models/country.js')
var Province = require('../models/province.js')
const { checkToken } = require('../config/tokens')


async function createCountry(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    const data = {
        "coun_iso23366" : req.body.iso23366,
        "coun_description" : req.body.description,
        "coun_icon" : req.body.icon,
        "coun_prefixphone" : req.body.prefixphone,
        "coun_status" : req.body.status,
    }
    try{
        var result = await(country_model.create(data))
        return 'Se creo el país correctamente'
    } catch (e) {
        return e.parent.detail
    } 
}



async function updateCountry(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    
    var coun_ide = req.params.coun_ide;
    const {  coun_iso23366, coun_description, coun_icon, coun_prefixphone, coun_status} = req.body;
    const updatecountry = await country_model.findAll({
        attributes: ['coun_ide','coun_iso23366', 'coun_description', 'coun_icon', 'coun_prefixphone', 'coun_status'],
        where:{
           coun_ide 
        }
    });
    if(updatecountry.length > 0){
        return new Promise((resolve) => {
            updatecountry.forEach(async country_model => {
                var results = ''
                try {
                    var result = await (country_model.update({
                                                    coun_iso23366,
                                                    coun_description,
                                                    coun_icon, 
                                                    coun_prefixphone, 
                                                    coun_status
                                            }));
                    results = 'País actualizado correctamente';
                } catch (e) {
                    results = e.parent.detail;
                }
                resolve(results)
            })
        })
    } else {
        return new Promise((resolve) => {
            resolve("País no encontrado")
        })
    }
}



async function deleteCountry(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var coun_ide = req.params.coun_ide;
    return new Promise(async(resolve) => {
        try{
            var result = await (country_model.destroy({
                where: {
                    coun_ide
                }
            }));
            if (result == 1) {
                resolve('País eliminado correctamente')
            } else {
                resolve('País no encontrado')
            }
        } catch (e) {
            resolve('Hubo errores en la eliminación del País')
        }
    })
}

async function listCountry(req, res) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    return new Promise(async(resolve) => {
        var result = await(country_model.findAll())
        var count_country = result.length;
        if (count_country > 0) {
            resolve(result)
        } else {
            resolve('No hay ningún país para mostrar')
        }
    });
}


async function getCountryById(req, id) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var coun_ide = id;
    return new Promise(async(resolve) => {
        var result = await (country_model.findAll({ where: { coun_ide:  coun_ide } }))
        var count_country = result.length;
        if (count_country > 0) {
            resolve(result)
        } else {
            resolve('No hay ningún País para mostrar')
        }
        return result
    })
}

module.exports.createCountry = createCountry
module.exports.updateCountry = updateCountry
module.exports.deleteCountry = deleteCountry
module.exports.listCountry = listCountry
module.exports.getCountryById = getCountryById