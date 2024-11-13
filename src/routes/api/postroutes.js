const { getAutoresPost } = require('../../controllers/autorescontroller');
const { getAllPost, getAllCategories, getPostByAutor, postPost, getPostById } = require('../../controllers/postcontoller');
const { comprobarId, comprobarPost } = require('../../utils/middleware');

const router= require('express').Router();

router.get('/', getAllPost);
router.get('/:idpost', getPostById)
router.get('/autores', getAutoresPost)
router.get('/autores/:idautor',comprobarId, getPostByAutor)
router.get('/categories', comprobarId,getAllCategories)

router.post('/', comprobarPost, postPost);


module.exports = router;