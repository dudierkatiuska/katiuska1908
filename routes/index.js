
const { Router } = require('express')

const router = Router();

var prefix_api = '/api'

var bodyParser = require('body-parser');

// support parsing of application/json type post data
router.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
router.use(bodyParser.urlencoded({ extended: true }));


const { createCategory, listCategory, updateCategory, deleteCategory,getCategoryById }  = require('../controllers/Categories.js')
const { createSubcategory, listSubcategory, updateSubcategory, deleteSubcategory, getSubcategoryById }  = require('../controllers/Subcategories.js')
const { createSpecialities, listSpecialities, updateSpecialities, deleteSpecialities,getSpecialitiesById }  = require('../controllers/Specialities.js')
const { createCountry, listCountry, updateCountry, deleteCountry, getCountryById }  = require('../controllers/Countries')
const { createProvince, listProvince, updateProvince, deleteProvince,getProvinceById }  = require('../controllers/Provinces')
const { createCity, listCity, updateCity, deleteCity,getCityById }  = require('../controllers/Cities')
const { createLanguage, listLanguage, updateLanguage, deleteLanguage,getLanguageById }  = require('../controllers/Languages')
const { createSocial, listSocial, updateSocial, deleteSocial, getSocialById }  = require('../controllers/Socials')
const { createUserlanguage, listUserlanguage, updateUserlanguage, deleteUserlanguage,getUserlanguageById }  = require('../controllers/Userlanguages')
const { createUsersocial, listUsersocial, updateUsersocial, deleteUsersocial,getUsersocialById }  = require('../controllers/Usersocial')
const { createCodepromotion, listCodepromotion, updateCodepromotion, deleteCodepromotion,getCodepromotionById }  = require('../controllers/Codepromotions')
const { createTicket, listTicket, updateTicket, deleteTicket,getTicketById }  = require('../controllers/Tickets.js')
const { createRating, listRating, updateRating, deleteRating, getRatingById}  = require('../controllers/Ratings.js')
const { createVideo, listVideo, updateVideo, deleteVideo,getVideoById }  = require('../controllers/Videos')
const { createRequest, listRequest, updateRequest, deleteRequest,getRequestById }  = require('../controllers/Request.js')
const { createLiveevents, listLiveevents, updateLiveevents, deleteLiveevents,getLiveeventsById }  = require('../controllers/Liveevents')


/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});



//Crear un nueva Categoria
router.post(prefix_api + '/category/create', async function(req, res) {
    var result = await(createCategory(req, res))
	res.send(result)
});

//Actualizar categoria
router.put(prefix_api + '/category/update/:cate_ide', async function(req, res) {
    var result = await(updateCategory(req, res))
	res.send(result)
});
//Borrar categoria
router.delete(prefix_api + '/category/delete/:cate_ide', async function(req, res) {
    var result = await(deleteCategory(req, res))
	res.send(result)
});
//Obtener todas las categoria
router.get(prefix_api + '/category/getAll', async function(req, res) {
	var result = await(listCategory(req, res))
	res.send(result);
});
//Obtener una categoria específica
router.get(prefix_api + '/category/getById/:cate_ide', async function(req, res) {
	var cate_ide = req.params.cate_ide;
	var result = await(getCategoryById(req, cate_ide))
	res.send(result);
});




//Crear un nueva especialidad
router.post(prefix_api + '/specialities/create',  async function(req, res) {
    var result = await(createSpecialities(req, res))
    res.send(result);
});
//Actualizar especialidad
router.put(prefix_api + '/specialities/update/:spec_ide', async function(req, res) {
     var result = await(updateSpecialities(req, res))
     res.send(result);
});
//Borrar especialidad
router.delete(prefix_api + '/specialities/delete/:spec_ide', async function(req, res) {
    var result = await(deleteSpecialities(req, res))
    res.send(result);
});
//Obtener todas las especialidad
router.get(prefix_api + '/specialities/getAll', async function(req, res) {
	var result = await(listSpecialities(req, res))
	res.send(result);
});
//Obtener una especialidad específica
router.get(prefix_api + '/specialities/getById/:spec_ide', async function(req, res) {
	var spec_ide = req.params.spec_ide;
	var result = await(getSpecialitiesById(req, spec_ide))
	res.send(result);
});



//Crear un nueva Subcategoria
router.post(prefix_api + '/subcategory/create', async function(req, res) {
    var result =  await (createSubcategory(req, res))
    res.send(result);
});
//Actualizar Subcategoria
router.put(prefix_api + '/subcategory/update/:suca_ide', async function(req, res) {
    var result = await(updateSubcategory(req, res))
    res.send(result);
});
//Borrar Subcategoria
router.delete(prefix_api + '/subcategory/delete/:suca_ide', async function(req, res) {
    var result = await(deleteSubcategory(req, res))
    res.send(result);
});
//Obtener todas las Subcategoria
router.get(prefix_api + '/subcategory/getAll', async function(req, res) {
	var result = await(listSubcategory(req, res))
	res.send(result);
});
//Obtener una Subcategoria específica
router.get(prefix_api + '/subcategory/getById/:suca_ide', async function(req, res) {
	var suca_ide = req.params.suca_ide;
	var result = await(getSubcategoryById(req, suca_ide))
	res.send(result);
});




//Crear un nuevo pais
router.post(prefix_api + '/country/create', async function(req, res) {
    var result = await(createCountry(req, res))
	res.send(result)
});
//Actualizar pais
router.put(prefix_api + '/country/update/:coun_ide', async function(req, res) {
    var result = await(updateCountry(req, res))
	res.send(result)
});
//Borrar pais
router.delete(prefix_api + '/country/delete/:coun_ide', async function(req, res) {
    var result = await(deleteCountry(req, res))
	res.send(result)
});
//Obtener todos los paises
router.get(prefix_api + '/country/getAll', async function(req, res) {
	var result = await(listCountry(req, res))
	res.send(result);
});
//Obtener un país específico
router.get(prefix_api + '/country/getById/:coun_ide', async function(req, res) {
	var coun_ide = req.params.coun_ide;
	var result = await(getCountryById(req, coun_ide))
	res.send(result);
});



//Crear un nuevo provincia
router.post(prefix_api + '/province/create', async function(req, res) {
    var result = await(createProvince(req, res))
    res.send(result);
	
});
//Actualizar provincia
router.put(prefix_api + '/province/update/:prov_ide', async function(req, res) {
    result = await(updateProvince(req, res))
    res.send(result);
});
//Borrar provincia
router.delete(prefix_api + '/province/delete/:prov_ide', async function(req, res) {
    var result = await(deleteProvince(req, res))
    res.send(result);
});
//Obtener todas las provincias
router.get(prefix_api + '/province/getAll', async function(req, res) {
	var result = await(listProvince(req, res))
	res.send(result);
});
//Obtener una provincia específica
router.get(prefix_api + '/province/getById/:prov_ide', async function(req, res) {
	var prov_ide = req.params.prov_ide;
	var result = await(getProvinceById(req, prov_ide))
	res.send(result);
});




//Crear un nuevo ciudad
router.post(prefix_api + '/city/create', async function(req, res) {
    var result = await(createCity(req, res))
	res.send(result)
});
//Actualizar ciudad
router.put(prefix_api + '/city/update/:city_ide', async function(req, res) {
    var result = await(updateCity(req, res))
	res.send(result)
});
//Borrar ciudad
router.delete(prefix_api + '/city/delete/:city_ide', async function(req, res) {
    var result = await(deleteCity(req, res))
	res.send(result)
});
//Obtener todas los ciudades
router.get(prefix_api + '/city/getAll', async function(req, res) {
	var result = await(listCity(req, res))
	res.send(result);
});
//Obtener una ciudad específica
router.get(prefix_api + '/city/getById/:city_ide', async function(req, res) {
	var city_ide = req.params.city_ide;
	var result = await(getCityById(req, city_ide))
	res.send(result);
});



//Crear un nuevo lenguaje
router.post(prefix_api + '/language/create', async function(req, res) {
    var result = await(createLanguage(req, res))
	res.send(result)
});
//Actualizar lenguaje
router.put(prefix_api + '/language/update/:lang_ide', async function(req, res) {
    var result = await(updateLanguage(req, res))
	res.send(result)
});
//Borrar lenguaje
router.delete(prefix_api + '/language/delete/:lang_ide', async function(req, res) {
    var result = await(deleteLanguage(req, res))
	res.send(result)
});
//Obtener todas los lenguajes
router.get(prefix_api + '/language/getAll', async function(req, res) {
	var result = await(listLanguage(req, res))
	res.send(result);
});
//Obtener un lenguajes específico
router.get(prefix_api + '/language/getById/:lang_ide', async function(req, res) {
	var lang_ide = req.params.lang_ide;
	var result = await(getLanguageById(req, lang_ide))
	res.send(result);
});





//Crear un nuevo red social
router.post(prefix_api + '/social/create', async function(req, res) {
    var result = await(createSocial(req, res))
    res.send(result);
});
//Actualizar red social
router.put(prefix_api + '/social/update/:soci_ide', async function(req, res) {
    var result = await(updateSocial(req, res))
    res.send(result);
});
//Borrar red social
router.delete(prefix_api + '/social/delete/:soci_ide', async function(req, res) {
    var result = await(deleteSocial(req, res))
    res.send(result);
});
//Obtener todas los red social
router.get(prefix_api + '/social/getAll', async function(req, res) {
	var result = await(listSocial(req, res))
	res.send(result);
});
//Obtener una red social específica
router.get(prefix_api + '/social/getById/:soci_ide', async function(req, res) {
	var soci_ide = req.params.soci_ide;
	var result = await(getSocialById(req, soci_ide))
	res.send(result);
});





//Crear un nuevo red social-usuario
router.post(prefix_api + '/usersocial/create', async function(req, res) {
    var result = await (createUsersocial(req, res))
    res.send(result);
});
//Actualizar red social-usuario
router.put(prefix_api + '/usersocial/update/:usso_ide', async function(req, res) {
    var result = await(updateUsersocial(req, res))
    res.send(result);
});
//Borrar red social-usuario
router.delete(prefix_api + '/usersocial/delete/:usso_ide', async function(req, res) {
    var result = await(deleteUsersocial(req, res))
    res.send(result);
});
//Obtener todas los red social-usuario
router.get(prefix_api + '/usersocial/getAll', async function(req, res) {
	var result = await(listUsersocial(req, res))
	res.send(result);
});
//Obtener una red social-usuario específica
router.get(prefix_api + '/usersocial/getById/:usso_ide', async function(req, res) {
	var usso_ide = req.params.usso_ide;
	var result = await(getUsersocialById(req, usso_ide))
	res.send(result);
});




//Crear un nueva relacion usuario-lenguaje
router.post(prefix_api + '/userlanguage/create', async function(req, res) {
    var result = await (createUserlanguage(req, res))
    res.send(result);
});
//Actualizar relacion usuario-lenguaje
router.put(prefix_api + '/userlanguage/update/:usla_ide', async function(req, res) {
    var result = await(updateUserlanguage(req, res))
    res.send(result);
});
//Borrar relacion usuario-lenguaje
router.delete(prefix_api + '/userlanguage/delete/:usla_ide', async function(req, res) {
    var result = await(deleteUserlanguage(req, res))
    res.send(result);
});
//Obtener todas la relacion usuario-lenguaje
router.get(prefix_api + '/userlanguage/getAll', async function(req, res) {
	var result = await(listUserlanguage(req, res))
	res.send(result);
});
//Obtener un usuario-lenguaje específico
router.get(prefix_api + '/userlanguage/getById/:usla_ide', async function(req, res) {
	var usla_ide = req.params.usla_ide;
	var result = await(getUserlanguageById(req, usla_ide))
	res.send(result);
});





//Crear cupon
router.post(prefix_api + '/codepromotion/create', async function(req, res) {
    var result = await(createCodepromotion(req, res))
	res.send(result)
});
//Actualizar cupon
router.put(prefix_api + '/codepromotion/update/:copr_ide', async function(req, res) {
    var result = await(updateCodepromotion(req, res))
	res.send(result)
});
//Borrar cupon
router.delete(prefix_api + '/codepromotion/delete/:copr_ide', async function(req, res) {
    var result = await(deleteCodepromotion(req, res))
	res.send(result)
});
//Obtener  cupon
router.get(prefix_api + '/codepromotion/getAll', async function(req, res) {
	var result = await(listCodepromotion(req, res))
	res.send(result);
});
//Obtener un cupon específico
router.get(prefix_api + '/codepromotion/getById/:copr_ide', async function(req, res) {
	var copr_ide = req.params.copr_ide;
	var result = await(getCodepromotionById(req, copr_ide))
	res.send(result);
});



//Crear ticket
router.post(prefix_api + '/ticket/create', async function(req, res) {
    var result = await (createTicket(req, res))
    res.send(result);
	
});
//Actualizar ticket
router.put(prefix_api + '/ticket/update/:tick_ide', async function(req, res) {
    var result = await(updateTicket(req, res))
    res.send(result);
});
//Borrar ticket
router.delete(prefix_api + '/ticket/delete/:tick_ide', async function(req, res) {
    var result = await(deleteTicket(req, res))
    res.send(result);
});
//Obtener  ticket
router.get(prefix_api + '/ticket/getAll', async function(req, res) {
	var result = await(listTicket(req, res))
	res.send(result);
});
//Obtener un ticket específico
router.get(prefix_api + '/ticket/getById/:tick_ide', async function(req, res) {
	var tick_ide = req.params.tick_ide;
	var result = await(getTicketById(req, tick_ide))
	res.send(result);
});



//Crear rating
router.post(prefix_api + '/rating/create', async function(req, res) {
    var result = await(createRating(req, res))
    res.send(result);
});
//Actualizar rating
router.put(prefix_api + '/rating/update/:rati_ide', async function(req, res) {
    var result = await(updateRating(req, res))
    res.send(result);
});
//Borrar rating
router.delete(prefix_api + '/rating/delete/:rati_ide', async function(req, res) {
    var result = await(deleteRating(req, res))
    res.send(result);
});
//Obtener  rating
router.get(prefix_api + '/rating/getAll', async function(req, res) {
	var result = await(listRating(req, res))
	res.send(result);
});
//Obtener un rating específico
router.get(prefix_api + '/rating/getById/:rati_ide', async function(req, res) {
	var rati_ide = req.params.rati_ide;
	var result = await(getRatingById(req, rati_ide))
	res.send(result);
});



//Crear video
router.post(prefix_api + '/video/create', async function(req, res) {
    var result = await (createVideo(req, res))
    res.send(result);
});
//Actualizar video
router.put(prefix_api + '/video/update/:vide_ide', async function(req, res) {
    var result = await(updateVideo(req, res))
    res.send(result);
});
//Borrar video
router.delete(prefix_api + '/video/delete/:vide_ide', async function(req, res) {
    var result = await(deleteVideo(req, res))
    res.send(result);
});
//Obtener  video
router.get(prefix_api + '/video/getAll', async function(req, res) {
	var result = await(listVideo(req, res))
	res.send(result);
});
//Obtener un video específico
router.get(prefix_api + '/video/getById/:vide_ide', async function(req, res) {
	var vide_ide = req.params.vide_ide;
	var result = await(getVideoById(req, vide_ide))
	res.send(result);
});




//Crear solicitud
router.post(prefix_api + '/request/create', async function(req, res) {
    var result = await(createRequest(req, res))
    res.send(result);
});
//Actualizar solicitud
router.put(prefix_api + '/request/update/:requ_ide', async function(req, res) {
    var result = await(updateRequest(req, res))
    res.send(result);
});
//Borrar solicitud
router.delete(prefix_api + '/request/delete/:requ_ide', async function(req, res) {
    var result = await(deleteRequest(req, res))
    res.send(result);
});
//Obtener  solicitud
router.get(prefix_api + '/request/getAll', async function(req, res) {
	var result = await(listRequest(req, res))
	res.send(result);
});
//Obtener una solicitud específica
router.get(prefix_api + '/request/getById/:requ_ide', async function(req, res) {
	var requ_ide = req.params.requ_ide;
	var result = await(getRequestById(req, requ_ide))
	res.send(result);
});





//Crear evento en vivo
router.post(prefix_api + '/liveevents/create',async function(req, res) {
    var result = await(createLiveevents(req, res))
	res.send(result);
});
//Actualizar evento en vivo
router.put(prefix_api + '/liveevents/update/:live_ide', async function(req, res) {
    var result = await(updateLiveevents(req, res))
	res.send(result);
});
//Borrar evento en vivo
router.delete(prefix_api + '/liveevents/delete/:live_ide', async function(req, res) {
    var result = await(deleteLiveevents(req, res))
	res.send(result);
});
//Obtener  evento en vivo
router.get(prefix_api + '/liveevents/getAll', async function(req, res) {
	var result = await(listLiveevents(req, res))
	res.send(result);
});
//Obtener un evento en vivo específico
router.get(prefix_api + '/liveevents/getById/:live_ide', async function(req, res) {
	var live_ide = req.params.live_ide;
	var result = await(getLiveeventsById(req, live_ide))
	res.send(result);
});


module.exports = router;
