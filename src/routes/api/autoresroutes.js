const {getAllAutores, getIdAutor, postAutor, putAutor, deleteAutorById, getClientesPost, getAutoresPost }= require('../../controllers/autorescontroller');
const { updateAutorById } = require('../../models/autoresmodel');
const { comprobarIdAutor, comprobarAutor } = require('../../utils/middleware');

const router= require('express').Router();
//Autores Routes

//consulta de todos los autores
router.get('/', getAllAutores);
//consulta de todos los posts de todos los autores
router.get('/post', getAutoresPost)
//consulta de un autor por id
router.get('/:idautor', comprobarIdAutor,getIdAutor);

//creacion de una autor nuevo
router.post('/',comprobarAutor, postAutor);

//actualizacion de una autor
router.put('/:idautor',comprobarIdAutor, putAutor)

//eliminacion de un autor
router.delete('/:idautor', comprobarIdAutor, deleteAutorById)


module.exports = router;