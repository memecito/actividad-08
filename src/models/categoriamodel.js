const pool = require('../config/db')


function deleteCategoriaByIdpost(idpost){
    return pool.query('delete from categoria_posts where post_id = ?', [idpost])
}



module.exports={
    deleteCategoriaByIdpost
};