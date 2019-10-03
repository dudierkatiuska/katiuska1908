'use strict'
var subcategory_model = require('../models/subcategory.js')
var category_model = require('../models/category.js')
const { checkToken } = require('../config/tokens')


async function createSubcategory(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    const data = {
        "suca_description" : req.body.description,
        "suca_cate" : req.body.cate,
        "suca_status" : req.body.status,
    }
    try{
        var result = await(subcategory_model.create(data))
        return 'Se creo la Subcategoria correctamente'
    } catch (e) {
        return e.parent.detail
    }
}


async function updateSubcategory(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var suca_ide = req.params.suca_ide;
    const {  suca_description, suca_cate, suca_status} = req.body;
    const updatesubcategory = await subcategory_model.findAll({
        attributes: ['suca_ide','suca_description','suca_cate', 'suca_status'],
        where:{
           suca_ide 
        }
    });
    if(updatesubcategory.length > 0){
        return new Promise((resolve) => {
            updatesubcategory.forEach(async subcategory_model => {
                var results = ''
                try {
                    var result = await (subcategory_model.update({
                                                        suca_description,
                                                        suca_cate,
                                                        suca_status
                                            }));
                    results = 'Subcategoria actualizada correctamente';
                } catch (e) {
                    results = e.parent.detail;
                }
                resolve(results)
            })
        })
    } else {
        return new Promise((resolve) => {
            resolve("Subcategoria no encontrada")
        })
    }
}


async function deleteSubcategory(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    
    var suca_ide = req.params.suca_ide;
    return new Promise(async(resolve) => {
        try{
            var result = await (subcategory_model.destroy({
                where: {
                    suca_ide
                }
            }));
            if (result == 1) {
                resolve('Subcategoria eliminada correctamente')
            } else {
                resolve('Subcategoria no encontrada')
            }
        } catch (e) {
            resolve('Hubo errores en la eliminación de la Subcategoria')
        }
    })
}

async function listSubcategory(req, res) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    return new Promise(async(resolve) => {
        var result = await (subcategory_model.findAll())
        var subcategories = {};
        var count_subcategories = result.length;
        if (count_subcategories > 0) {
                for (var i = 0; i < result.length; i++) {
                    var result_category = await (category_model.findAll({ where: { cate_ide: result[i].suca_cate } }))
                    subcategories[i] = {};
                    subcategories[i].ide = result[i].suca_ide;
                    subcategories[i].description = result[i].suca_description;
                    subcategories[i].cate = result[i].suca_cate;
                    subcategories[i].status = result[i].suca_status;
                    subcategories[i].category = {};
                    subcategories[i].category.description = result_category[0].cate_description;
                }
                resolve(subcategories)
        } else {
            resolve('No hay ningún acceso para mostrar')
        }   
    })
}

async function getSubcategoryById(req, id) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var suca_ide = id;
    return new Promise(async(resolve) => {
        var result = await (subcategory_model.findAll({ where: { suca_ide:  suca_ide } }))
        var count_subcategory = result.length;
        if (count_subcategory > 0) {
            resolve(result)
        } else {
            resolve('No hay ninguna subcategoria para mostrar')
        }
        return result
    })
}

module.exports.createSubcategory = createSubcategory
module.exports.updateSubcategory = updateSubcategory
module.exports.deleteSubcategory = deleteSubcategory
module.exports.listSubcategory = listSubcategory
module.exports.getSubcategoryById = getSubcategoryById