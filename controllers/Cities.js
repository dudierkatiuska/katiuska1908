'use strict'
var city_model = require('../models/city.js')
var country_model = require('../models/country.js')
var province_model = require('../models/province.js')
const { checkToken } = require('../config/tokens')


async function createCity(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    const data = {
        "city_description" : req.body.description,
        "city_capital" : req.body.capital,
        "city_zipcode" : req.body.zipcode,
        "city_prov" : req.body.prov,
        "city_status" : req.body.status,
    }
    try{
        var result = await(city_model.create(data))
        return 'Se creo la ciudad correctamente'
    } catch (e) {
        return e.parent.detail
    } 
}


async function updateCity(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var city_ide = req.params.city_ide;
    const { city_description, city_capital,city_zipcode,city_prov,city_status} = req.body;
    const updatecity = await city_model.findAll({
        attributes: ['city_ide','city_description', 'city_capital','city_zipcode','city_prov','city_status'],
        where:{
           city_ide 
        }
    });
    if(updatecity.length > 0){
        return new Promise((resolve) => {
            updatecity.forEach(async city_model => {
                var results = ''
                try {
                    var result = await (city_model.update({
                                                    city_description,
                                                    city_capital,
                                                    city_zipcode,
                                                    city_prov,
                                                    city_status 
                                            }));
                    results = 'Ciudad actualizada correctamente';
                } catch (e) {
                    results = e.parent.detail;
                }
                resolve(results)
            })
        })
    } else {
        return new Promise((resolve) => {
            resolve("Categoria no encontrada")
        })
    }
}


async function deleteCity(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var city_ide = req.params.city_ide;
    return new Promise(async(resolve) => {
        try{
            var result = await (city_model.destroy({
                where: {
                    city_ide
                }
            }));
            if (result == 1) {
                resolve('Ciudad eliminada correctamente')
            } else {
                resolve('Ciudad no encontrada')
            }
        } catch (e) {
            resolve('Hubo errores en la eliminación de la Ciudad')
        }
    })
}



async function listCity(req, res) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    return new Promise(async(resolve) => {
        var result = await (city_model.findAll())
        var cities = {};
        var count_cities = result.length;
        if (count_cities > 0) {
            for (var i = 0; i < result.length; i++) {
                var result_province = await (province_model.findAll({ where: { prov_ide: result[i].city_prov } }))
                var result_country = await (country_model.findAll({ where: { coun_ide: result_province[0].prov_country } }))
                cities[i] = {};
                cities[i].ide = result[i].city_ide;
                cities[i].description = result[i].city_description;
                cities[i].capital = result[i].city_capital;
                cities[i].zipcode = result[i].city_zipcode;
                cities[i].prov = result[i].city_prov;
                cities[i].status = result[i].city_status;
                cities[i].province = {};
                cities[i].province.description = result_province[0].prov_description;
                cities[i].province.iso233661 = result_province[0].prov_iso233661;
                cities[i].country = {};
                cities[i].country.description = result_country[0].coun_description;
                cities[i].country.iso23366 = result_country[0].coun_iso23366;
            }
            resolve(cities)
        } else {
            resolve('No hay ninguna ciudad para mostrar')
        }
        
    })
}


async function getCityById(req, id) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var city_ide = id;
    return new Promise(async(resolve) => {
        var result = await (city_model.findAll({ where: { city_ide:  city_ide } }))
        var count_cities = result.length;
        if (count_cities > 0) {
            resolve(result)
        } else {
            resolve('No hay ninguna ciudad para mostrar')
        }
        return result
    })
}


module.exports.createCity = createCity
module.exports.updateCity = updateCity
module.exports.deleteCity = deleteCity
module.exports.listCity = listCity
module.exports.getCityById = getCityById