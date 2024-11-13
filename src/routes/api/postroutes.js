const { getAutoresPost } = require('../../controllers/autorescontroller');
const { getAllPost, getAllCategories, getPostAutores } = require('../../controllers/postcontoller');

const router= require('express').Router();

router.get('/', getAllPost);
router.get('/autores', getAutoresPost)
router.get('/autores/:idautor')
router.get('/categories', getAllCategories)


module.exports = router;