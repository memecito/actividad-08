//creacion de consultas sql

const pool = require("../config/db");

function selectAllPost(){
    return pool.query('select * from posts')
}

function selectPostById(idPost){
    return pool.query('select * from posts where idpost = ?', [idPost]);
}

function selectPostByTitulo(titulo){
    return pool.query('select * from posts where titulo = ?', [titulo]);
}
function selectPostByTituloByAutor({titulo, autor_id}){
    return pool.query('select * from posts where titulo = ? and autor_id =?', [titulo,autor_id])
}

function selectPostByAutor(idAutor){
    return pool.query('Select * from posts where autor_id = ?', [idAutor])
}

function selectAllCategories(){
    return pool.query('Select * from categorias')
}

function createPost({titulo, descripcion, fecha_creacion, categoria, autor_id}){
    return pool.query('insert into posts (titulo, descripcion, fecha_creacion, categoria, autor_id) values  (?,?,?,?,?)',[titulo, descripcion, fecha_creacion, categoria, autor_id])
}

function deleteByIdPost(idpost){
    return pool.query('delete from posts where idpost = ?', [idpost])
}
function deleteByIdAutor(id_autor){
    return pool.query('delete from posts where id_autor = ?', [id_autor])
}

module.exports={
    selectAllPost,selectPostById, selectPostByTitulo, selectPostByAutor,
    selectPostByTituloByAutor, selectAllCategories, 
    createPost, 
    deleteByIdPost, deleteByIdAutor
}