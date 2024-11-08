const { getAllPost, getAllCategories } = require('../../controllers/postcontoller');

const router= require('express').Router();

router.get('/', getAllPost);
router.get('/autores/:idautor')
router.get('/categories', getAllCategories)


module.exports = router;