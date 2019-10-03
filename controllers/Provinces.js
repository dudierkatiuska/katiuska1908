'use strict'
var province_model = require('../models/province.js')
var country_model = require('../models/country.js')
const { checkToken } = require('../config/tokens')

async function createProvince(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    const data = {
        "prov_iso233661" : req.body.iso233661,
        "prov_description" : req.body.description,
        "prov_country" : req.body.country,
        "prov_status" : req.body.status,
    }
    try{
        var result = await(province_model.create(data))
        return 'Se creo la provincia correctamente'
    } catch (e) {
        return e.parent.detail
    } 
}


async function updateProvince(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var prov_ide = req.params.prov_ide;
    const {  prov_iso233661, prov_description, prov_country, prov_status} = req.body;
    const updateprovince = await province_model.findAll({
        attributes: ['prov_ide','prov_iso233661', 'prov_description', 'prov_country', 'prov_status'],
        where:{
           prov_ide 
        }
    });
    if(updateprovince.length > 0){
        return new Promise((resolve) => {
            updateprovince.forEach(async province_model => {
                var results = ''
                try {
                    var result = await (province_model.update({
                                                        prov_iso233661,
                                                        prov_description,
                                                        prov_country, 
                                                        prov_status
                                            }));
                    results = 'Provincia actualizada correctamente';
                } catch (e) {
                    results = e.parent.detail;
                }
                resolve(results)
            })
        })
    } else {
        return new Promise((resolve) => {
            resolve("Provincia no encontrada")
        })
    }
}

async function deleteProvince(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var prov_ide = req.params.prov_ide;
    return new Promise(async(resolve) => {
        try{
            var result = await (province_model.destroy({
                where: {
                    prov_ide
                }
            }));
            if (result == 1) {
                resolve('Provincia eliminada correctamente')
            } else {
                resolve('Provincia no encontrada')
            }
        } catch (e) {
            resolve('Hubo errores en la eliminación de la Provincia')
        }
    })
}


async function listProvince(req, res) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    
    return new Promise(async(resolve) => {
        var result = await (province_model.findAll())
        var provinces = {};
        var count_provinces = result.length;
        if (count_provinces > 0) {
            for (var i = 0; i < result.length; i++) {
                var result_country = await (country_model.findAll({ where: { coun_ide: result[i].prov_country } }))
        
                provinces[i] = {};
                provinces[i].ide = result[i].prov_ide;
                provinces[i].iso233661 = result[i].prov_iso233661;
                provinces[i].description = result[i].prov_description;
                provinces[i].country = result[i].prov_country;
                provinces[i].status = result[i].prov_status;
                provinces[i].country = {};
                provinces[i].country.description = result_country[0].coun_description;
                provinces[i].country.iso23366 = result_country[0].coun_iso23366;
            }
            resolve(provinces)
        } else {
            resolve('No hay ninguna provincia para mostrar')
        }   
    })
}

async function getProvinceById(req, id) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var prov_ide = id;
    return new Promise(async(resolve) => {
        var result = await (province_model.findAll({ where: { prov_ide:  prov_ide } }))
        var count_provinces = result.length;
        if (count_provinces > 0) {
            resolve(result)
        } else {
            resolve('No hay ninguna provincia para mostrar')
        }
        return result
    })
}

module.exports.createProvince = createProvince
module.exports.updateProvince = updateProvince
module.exports.deleteProvince = deleteProvince
module.exports.listProvince = listProvince
module.exports.getProvinceById = getProvinceById