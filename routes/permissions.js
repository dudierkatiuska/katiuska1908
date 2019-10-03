'use strict'
const { Router } = require('express')

const router = Router();

var prefix_api = '/api'

const { createPermission, listPermission, updatePermission, deletePermission, getPermissionById }  = require('../controllers/Permissions')


//Crear un nuevo Permission
router.post(prefix_api + '/permission/create', async function(req, res) {
    var result = await(createPermission(req, res))
    res.send(result);
});
//Actualizar Permission
router.put(prefix_api + '/permission/update/:perm_ide', async function(req, res) {
    var result = await(updatePermission(req, res))
    res.send(result);
});
//Borrar Permission
router.delete(prefix_api + '/permission/delete/:perm_ide', async function(req, res) {
    var result = await(deletePermission(req, res))
    res.send(result);
});
//Obtener todos los Permissions
router.get(prefix_api + '/permission/getAll', async function(req, res) {
	var result = await(listPermission(req, res))
	res.send(result);
});
//Obtener un  Permission especifico
router.get(prefix_api + '/permission/getById/:perm_ide', async function(req, res) {
	var perm_ide = req.params.perm_ide;
	var result = await(getPermissionById(req, perm_ide))
	res.send(result);
});


module.exports = router;