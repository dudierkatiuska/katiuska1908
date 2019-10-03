'use strict'
const { Router } = require('express')

const router = Router();

var prefix_api = '/api'

const { createAccesstypeuser, listAccesstypeuser, updateAccesstypeuser, deleteAccesstypeuser, getAccesstypeuserById }  = require('../controllers/Accesstypeuser')


//Crear un nuevo acceso  tipo de usuario
router.post(prefix_api + '/accesstypeuser/create', async function(req, res) {
    var result = await(createAccesstypeuser(req, res))
    res.send(result)
});
//Actualizar Acceso tipo de usuario
router.put(prefix_api + '/accesstypeuser/update/:actu_ide', async function(req, res) {
    var result = await(updateAccesstypeuser(req, res))
    res.send(result)
});
//Borrar Acceso tipo de usuario
router.delete(prefix_api + '/accesstypeuser/delete/:actu_ide', async function(req, res) {
    var result = await(deleteAccesstypeuser(req, res))
    res.send(result)
});
//Obtener todos los Acceso tipo de usuario
router.get(prefix_api + '/accesstypeuser/getAll', async function(req, res) {
	var result = await(listAccesstypeuser(req, res))
	res.send(result);
});
//Obtener un Acceso tipo de usuario especifico
router.get(prefix_api + '/accesstypeuser/getById/:actu_ide', async function(req, res) {
	var actu_ide = req.params.actu_ide;
	var result = await(getAccesstypeuserById(req, actu_ide))
	res.send(result);
});


module.exports = router;