'use strict'
const { Router } = require('express')

const router = Router();

var prefix_api = '/api'

const { createAccess, listAccess, updateAccess, deleteAccess,getAccessById, login, register}  = require('../controllers/Access')


//Crear un nuevo access
router.post(prefix_api + '/access/create', async function(req, res) {
	var result = await(createAccess(req, res))
	res.send(result)
});
//Actualizar access
router.put(prefix_api + '/access/update/:acce_ide', async function(req, res) {
	var result = await(updateAccess(req, res))
	res.send(result)
});
//Borrar access
router.delete(prefix_api + '/access/delete/:acce_ide', async function(req, res) {
	var result = await(deleteAccess(req, res))
	res.send(result)
});
//Obtener todos los access
router.get(prefix_api + '/access/getAll', async function(req, res) {
	var result = await(listAccess(req, res))
	res.send(result);
});
//Obtener un  acceso especifico
router.get(prefix_api + '/access/getById/:acce_ide', async function(req, res) {
	var acce_ide = req.params.acce_ide;
	var result = await(getAccessById(req, acce_ide))
	res.send(result);
});
//Crear un nuevo access
router.post(prefix_api + '/access/login', async function(req, res) {
    var result = await(login(req, res))
	res.send(result);
});

//Crear un nuevo access
router.post(prefix_api + '/access/register', function(req, res) {
	register(req, res)
});


module.exports = router;