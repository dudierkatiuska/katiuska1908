'use strict'
const { Router } = require('express')

const router = Router();

var prefix_api = '/api'

const { createUser, listUser, updateUser, deleteUser, getUserById }  = require('../controllers/Users')


//Crear un nuevo usuario
router.post(prefix_api + '/users/create', async function(req, res) {
    var result = await (createUser(req, res))
    res.send(result);
});
//Actualizar usuario
router.put(prefix_api + '/users/update/:user_ide', async function(req, res) {
    var result = await(updateUser(req, res))
    res.send(result);
});
//Borrar usuario
router.delete(prefix_api + '/users/delete/:user_ide', async function(req, res) {
    var result = await(deleteUser(req, res))
    res.send(result);
});
//Obtener todos los usuarios
router.get(prefix_api + '/users/getAll', async function(req, res) {
	var result = await(listUser(req, res))
	res.send(result);
});
//Obtener un usuario específico
router.get(prefix_api + '/users/getById/:user_ide', async function(req, res) {
	var user_ide = req.params.user_ide;
	var result = await(getUserById(req, user_ide))
	res.send(result);
});

module.exports = router;