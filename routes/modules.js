
const { Router } = require('express')

const router = Router();

var prefix_api = '/api'

var bodyParser = require('body-parser');

// support parsing of application/json type post data
router.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
router.use(bodyParser.urlencoded({ extended: true }));

const { createModule, listModule, updateModule, deleteModule, getModuleById}  = require('../controllers/Modules')
const { createSubmodule, listSubmodule, updateSubmodule, deleteSubmodule,getSubmoduleById }  = require('../controllers/Submodules')


//Crear un nuevo module
router.post(prefix_api + '/module/create', async function(req, res) {
    var result = await(createModule(req, res))
	res.send(result);
});
//Actualizar modulo
router.put(prefix_api + '/module/update/:modu_ide', async function(req, res) {
    var result = await(updateModule(req, res))
	res.send(result);
});
//Borrar modulo
router.delete(prefix_api + '/module/delete/:modu_ide', async function(req, res) {
    var result = await(deleteModule(req, res))
	res.send(result);
});
//Obtener todos los modulos
router.get(prefix_api + '/module/getAll', async function(req, res) {
	var result = await(listModule(req, res))
	res.send(result);
});
//Obtener un  modulo especifico
router.get(prefix_api + '/module/getById/:modu_ide', async function(req, res) {
	var modu_ide = req.params.modu_ide;
	var result = await(getModuleById(req, modu_ide))
	res.send(result);
});





//Crear un nuevo submodule
router.post(prefix_api + '/submodule/create', async function(req, res) {
    var result = await (createSubmodule(req, res))
    res.send(result);
});
//Actualizar submodule
router.put(prefix_api + '/submodule/update/:sumo_ide', async function(req, res) {
    var result = await(updateSubmodule(req, res))
    res.send(result);
});
//Borrar submodule
router.delete(prefix_api + '/submodule/delete/:sumo_ide', async function(req, res) {
    var result = await(deleteSubmodule(req, res))
    res.send(result);
});
//Obtener todos los submodules
router.get(prefix_api + '/submodule/getAll', async function(req, res) {
	var result = await(listSubmodule(req, res))
	res.send(result);
});
//Obtener un  submodulo especifico
router.get(prefix_api + '/submodule/getById/:sumo_ide', async function(req, res) {
	var sumo_ide = req.params.sumo_ide;
	var result = await(getSubmoduleById(req, sumo_ide))
	res.send(result);
});




module.exports = router;