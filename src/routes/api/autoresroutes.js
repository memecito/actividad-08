const {getAllAutores, getIdAutor, postAutor, putAutor, deleteAutorById, getClientesPost }= require('../../controllers/autorescontroller');
const { updateAutorById } = require('../../models/autoresmodel');
const { comprobarId, comprobarAutor } = require('../../utils/middleware');

const router= require('express').Router();
//Autores Routes

//consulta de todos los autores
router.get('/', getAllAutores);
//consulta de un autor por id
router.get('/:idautor', comprobarId,getIdAutor);
//consulta de todos los posts de todos los autores
router.get('/post')
//creacion de una autor nuevo
router.post('/',comprobarAutor, postAutor);
//actualizacion de una autor
router.put('/:idautor',comprobarId, putAutor)
//eliminacion de un autor
router.delete('/:idautor', comprobarId, deleteAutorById)


module.exports = router;