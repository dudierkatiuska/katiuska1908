'use strict'
const { Router } = require('express')

const router = Router();

var prefix_api = '/api'

const { createPermissioncrud, listPermissioncrud, updatePermissioncrud, deletePermissioncrud,getPermissioncrudById }  = require('../controllers/Permissioncruds')


//Crear un nuevo Permissioncrud
router.post(prefix_api + '/permissioncrud/create', async function(req, res) {
    var result = await(createPermissioncrud(req, res))
	res.send(result);
});
//Actualizar Permissioncrud
router.put(prefix_api + '/permissioncrud/update/:pecr_ide', async function(req, res) {
    var result = await(updatePermissioncrud(req, res))
    res.send(result);
});
//Borrar Permissioncrud
router.delete(prefix_api + '/permissioncrud/delete/:pecr_ide', async function(req, res) {
    var result = await(deletePermissioncrud(req, res))
    res.send(result);
});
//Obtener todos los Permissioncruds
router.get(prefix_api + '/permissioncrud/getAll', async function(req, res) {
	var result = await(listPermissioncrud(req, res))
	res.send(result);
});
//Obtener un  Permissioncruds especifico
router.get(prefix_api + '/permissioncrud/getById/:pecr_ide', async function(req, res) {
	var pecr_ide = req.params.pecr_ide;
	var result = await(getPermissioncrudById(req, pecr_ide))
	res.send(result);
});



module.exports = router;