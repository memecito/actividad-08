const { getAutoresPost } = require('../../controllers/autorescontroller');
const { getAllPost, getAllCategories, getPostByAutor, postPost, getPostById, deletePostByIdpost, getPostAutores } = require('../../controllers/postcontoller');
const { comprobarPost, comprobarIdAutor, comprobarIdPost } = require('../../utils/middleware');

const router= require('express').Router();

router.get('/', getAllPost);
router.get('/autores', getPostAutores);
router.get('/:idpost', comprobarIdPost,getPostById);


router.get('/autores/:idautor',comprobarIdAutor, getPostByAutor)
router.get('/categories', comprobarIdAutor,getAllCategories)

router.post('/', comprobarPost, postPost);

router.delete('/:idpost', comprobarIdPost, deletePostByIdpost)

module.exports = router;