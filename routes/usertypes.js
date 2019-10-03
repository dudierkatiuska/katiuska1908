'use strict'
const { Router } = require('express')

const router = Router();

var prefix_api = '/api'

const { createUsertype, listUsertype, updateUsertype, deleteUsertype,getUsertypeById }  = require('../controllers/Usertypes')


//Crear un nuevo tipo de usario
router.post(prefix_api + '/Usertype/create', async function(req, res) {
    var result = await (createUsertype(req, res))
    res.send(result);
});
//Actualizar tipo de usario
router.put(prefix_api + '/usertype/update/:usty_ide', async function(req, res) {
    var result = await(updateUsertype(req, res))
    res.send(result);
});
//Borrar tipo de usario
router.delete(prefix_api + '/usertype/delete/:usty_ide', async function(req, res) {
    var result = await(deleteUsertype(req, res))
    res.send(result);
});
//Obtener todos los tipo de usario
router.get(prefix_api + '/usertype/getAll', async function(req, res) {
	var result = await(listUsertype(req, res))
	res.send(result);
});

//Obtener un tipo de usario especifico
router.get(prefix_api + '/usertype/getById/:usty_ide', async function(req, res) {
	var usty_ide = req.params.usty_ide;
	var result = await(getUsertypeById(req, usty_ide))
	res.send(result);
});


module.exports = router;