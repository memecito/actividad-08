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
    return autor[0];    
}

async function selectAutorByUsuario(nombre){
    const [autor]= await pool.query('select * from autores where nombre = ?', [nombre])
    if(autor.length===0){
        return null
    }
    return autor[0]

}
async function selectAutorByEmail(email){
    const [autor]= await pool.query('select * from autores where email = ?', [email])
    if(autor.length===0){
        return null
    }
    return autor[0]
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
    selectAll, selectIdAutor, createAutor, updateAutorById, deleteById, selectAutorByEmail, selectAutorByUsuario
}