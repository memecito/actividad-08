//creacion de consultas sql

const pool = require("../config/db");

function selectAll(){
    return pool.query('select * from autores')
}
async function selectIdAutor(idAutor){
   const [autor]=  await pool.query('select * from autores where idautor = ? ', [idAutor])
    if (autor.length===0){
        
        return null;
    }
    return autor;
    
}
function createAutor({nombre, email, imagen}){
   
    return pool.query(
        'INSERT INTO autores ( nombre, email, imagen) VALUES ( ?, ?, ? )', 
        [nombre, email, imagen])
}

function updateAutorById(autorId, {nombre, email, imagen}){

    return pool.query(
        'UPDATE blog.autores SET nombre = ?, email = ?, imagen = ? where idautor = ?',
        [nombre, email, imagen, autorId])

}

function deleteById(idAutor){
    return pool.query('delete from autores where idautor = ?',[idAutor])
}

module.exports={
    selectAll, selectIdAutor, createAutor, updateAutorById, deleteById
}