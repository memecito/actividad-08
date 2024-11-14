const { selectIdAutor, selectAll } = require("../models/autoresmodel");
const {selectAllPost, selectPostByAutor, createPost, selectPostById, deleteByIdPost}= require("../models/postmodel")

const getAllPost = async(req, res, next)=>{
    try{
        const [result, fieldpaquet]= await selectAllPost();
        res.json(result);
    }catch(error){
        next(error);
    }
}

const getPostAutores= async (req, res, next)=>{
    try {
        const [autores]= await selectAll();
        // 
        const promAutoresPost= autores.map(autor=> selectPostByAutor(autor.idautor))
        const postresult =await Promise.all(promAutoresPost);   
        const result= []
        autores.forEach((autor, index)=> {
            const vacio= postresult[index][0];
            if(vacio.length !== 0){
                autor.posts = postresult[index][0]
                result[index]= autor;
            }
            
          } )
        
        
        res.json(result)
    } catch (error) {
        next(error)
    }

}
const getPostById= async(req,res,next)=>{
    const {idpost}= req.params;
    try {
        const [post]= await selectPostById(idpost);
        res.json(post);
    } catch (error) {
        next(error);
    }
}

const getPostByAutor= async (req, res, next)=>{
    const { idautor}= req.params;
    try {
        const autorpost= await selectIdAutor(idautor)
        const [result]= await selectPostByAutor(idautor)
        
        autorpost.posts=result;
        res.json(autorpost)
    } catch (error) {
        next(error)
    }
}

const getAllCategories=async(req,res,next)=>{
    try {
        
    } catch (error) {
        next(error)
    }
}

const postPost= async(req,res,next)=>{
    try {
        const [result]= await createPost(req.body);
        const {insertId}= result
        const [post]= await selectPostById(insertId);
        if(!post){
            return res.status(500).json({message: 'Fallo al crear el post'})
        }
        res.json(post)
    } catch (error) {
        res.json(error)
    }

}

const deletePostByIdpost= async(req, res, next)=>{
    const {idpost}= req.params;
    try {
        const [result]= await deleteByIdPost(idpost)
        res.json(result)
    } catch (error) {
        next(error)
    }
}

module.exports={
    getAllPost, getAllCategories,getPostAutores, getPostById, getPostByAutor, 
    postPost,
    deletePostByIdpost
}