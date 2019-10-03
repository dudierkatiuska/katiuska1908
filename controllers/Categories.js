'use strict'
var category_model = require('../models/category.js')
const { checkToken } = require('../config/tokens')


async function createCategory(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    const data = {
        "cate_description" : req.body.description,
        "cate_status" : req.body.status,
    }    
    try{
        var result = await(category_model.create(data))
        return 'Se creo la Categoria correctamente'
    } catch (e) {
        return e.parent.detail
    } 
}


async function updateCategory(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    
    var cate_ide = req.params.cate_ide;
    const { cate_description, cate_status} = req.body;
    const updatecategory = await category_model.findAll({
        attributes: ['cate_ide','cate_description', 'cate_status'],
        where:{
           cate_ide 
        }
    });
    if(updatecategory.length > 0){
        return new Promise((resolve) => {
            updatecategory.forEach(async category_model => {
                var results = ''
                try {
                    var result = await (category_model.update({
                                                    cate_description,
                                                    cate_status
                                            }));
                    results = 'Categoria actualizada correctamente';
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


async function deleteCategory(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    
    var cate_ide = req.params.cate_ide;
    return new Promise(async(resolve) => {
        try{
            var result = await (category_model.destroy({
                where: {
                    cate_ide
                }
            }));
            if (result == 1) {
                resolve('Categoria eliminada correctamente')
            } else {
                resolve('Categoria no encontrada')
            }
        } catch (e) {
            resolve('Hubo errores en la eliminación de la Categoria')
        }
    })
}



async function listCategory(req, res) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    return new Promise(async(resolve) => {
        var result = await(category_model.findAll())
        var count_category = result.length;
        if (count_category > 0) {
            resolve(result)
        } else {
            resolve('No hay ninguna categoria para mostrar')
        }
    });
}


async function getCategoryById(req, id) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    var cate_ide = id;
    return new Promise(async(resolve) => {
        var result = await (category_model.findAll({ where: { cate_ide:  cate_ide } }))
        var count_category = result.length;
        if (count_category > 0) {
            resolve(result)
        } else {
            resolve('No hay ninguna categoria para mostrar')
        }
        return result
    })
}


module.exports.createCategory = createCategory
module.exports.updateCategory = updateCategory
module.exports.deleteCategory = deleteCategory
module.exports.listCategory = listCategory
module.exports.getCategoryById = getCategoryById