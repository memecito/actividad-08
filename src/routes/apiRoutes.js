const router= require('express').Router();

router.use('/autores', require('./api/autoresroutes'));
router.use('/post', require('./api/postroutes'));


module.exports = router;