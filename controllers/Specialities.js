'use strict'
var specialities_model = require('../models/specialities.js')
var subcategory_model = require('../models/subcategory.js')
var category_model = require('../models/category.js')
const { checkToken } = require('../config/tokens')

async function createSpecialities(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    const data = {
        "spec_description" : req.body.description,
        "spec_suca" : req.body.suca,
        "spec_status" : req.body.status,
    }
    try{
        var result = await(specialities_model.create(data))
        return 'Se creo la especialidad correctamente'
    } catch (e) {
        return e.parent.detail
    }
}

async function updateSpecialities(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var spec_ide = req.params.spec_ide;
    const {  spec_description, spec_suca, spec_status} = req.body;
    const updatespecialities = await specialities_model.findAll({
        attributes: ['spec_ide','spec_description','spec_suca', 'spec_status'],
        where:{
           spec_ide 
        }
    });
    if(updatespecialities.length > 0){
        return new Promise((resolve) => {
            updatespecialities.forEach(async specialities_model => {
                var results = ''
                try {
                    var result = await (specialities_model.update({
                                                    spec_description,
                                                    spec_suca,
                                                    spec_status
                                            }));
                    results = 'especialidad actualizada correctamente';
                } catch (e) {
                    results = e.parent.detail;
                }
                resolve(results)
            })
        })
    } else {
        return new Promise((resolve) => {
            resolve("especialidad no encontrada")
        })
    }
}

async function deleteSpecialities(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    
    var spec_ide = req.params.spec_ide;
    return new Promise(async(resolve) => {
        try{
            var result = await (specialities_model.destroy({
                where: {
                    spec_ide
                }
            }));
            if (result == 1) {
                resolve('especialidad eliminada correctamente')
            } else {
                resolve('especialidad no encontrada')
            }
        } catch (e) {
            resolve('Hubo errores en la eliminación de la especialidad')
        }
    })
}

async function listSpecialities(req, res) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    return new Promise(async(resolve) => {
        var result = await (specialities_model.findAll())
        var specialities = {};
        var count_specialities = result.length;
        if (count_specialities > 0) {
            for (var i = 0; i < result.length; i++) {
                var result_subcategory = await (subcategory_model.findAll({ where: { suca_ide: result[i].spec_suca } }))
                var result_category = await (category_model.findAll({ where: { cate_ide: result_subcategory[0].suca_cate } }))
        
                specialities[i] = {};
                specialities[i].ide = result[i].spec_ide;
                specialities[i].description = result[i].spec_description;
                specialities[i].suca = result[i].spec_suca;
                specialities[i].status = result[i].spec_status;
                specialities[i].subcategory = {};
                specialities[i].subcategory.description = result_subcategory[0].suca_description;
                specialities[i].category = {};
                specialities[i].category.description = result_category[0].cate_description;
            }
            resolve(specialities)
        } else {
            resolve('No hay ninguna especialidad para mostrar')
        }   
    })
}

async function getSpecialitiesById(req, id) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    var spec_ide = id;
    return new Promise(async(resolve) => {
        var result = await (specialities_model.findAll({ where: { spec_ide:  spec_ide } }))
        var count_specialities = result.length;
        if (count_specialities > 0) {
            resolve(result)
        } else {
            resolve('No hay ninguna especialidad para mostrar')
        }
        return result
    })
}

module.exports.createSpecialities = createSpecialities
module.exports.updateSpecialities = updateSpecialities
module.exports.deleteSpecialities = deleteSpecialities
module.exports.listSpecialities = listSpecialities
module.exports.getSpecialitiesById = getSpecialitiesById