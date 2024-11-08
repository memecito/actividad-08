//creacion de consultas sql

const pool = require("../config/db");

function selectAll(){
    return pool.query('select * from post')
}

function selectIdAutor(idAutor){
    return pool.query('Select * from porst where idAutor = ?', [idAutor])
}

function selectAllCategories(){
    return pool.query('Select * from categorias')
}


module.exports={
    selectAll, selectIdAutor, selectAllCategories
}