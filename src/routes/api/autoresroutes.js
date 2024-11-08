const {getAllAutores, getIdAutor, postAutor, putAutor, deleteAutorById, }= require('../../controllers/autorescontroller');
const { updateAutorById } = require('../../models/autoresmodel');

const router= require('express').Router();
//Autores Routes
router.get('/', getAllAutores);

router.get('/:idautor', getIdAutor);

router.post('/', postAutor);

router.put('/:idautor', putAutor)

router.delete('/:idautor', deleteAutorById)


module.exports = router;