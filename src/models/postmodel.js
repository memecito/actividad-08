//creacion de consultas sql

const pool = require("../config/db");

function selectAllPost(){
    return pool.query('select * from posts')
}

function selectPostIdAutor(idAutor){
    return pool.query('Select * from posts where autor_id = ?', [idAutor])
}

function selectAllCategories(){
    return pool.query('Select * from categorias')
}


module.exports={
    selectAllPost, selectPostIdAutor, selectAllCategories
}