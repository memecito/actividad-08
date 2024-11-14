const { selectIdAutor, selectAutorByUsuario, selectAutorByEmail } = require("../models/autoresmodel");
const { selectPostByTituloByAutor, selectPostById } = require("../models/postmodel");

const comprobarIdAutor =async (req, res, next)=>{
  const { idautor }= req.params;
  if(isNaN(idautor)){
    return res.status(400).json({ message: 'El id del autor es incorrecto'})
  }
  const autor= await selectIdAutor(idautor)
  if(!autor){
    return res.status(404).json({message: 'El autor no existe'})
  }

  next();
}

const comprobarAutor= async(req, res, next)=>{
  const {nombre, email}= req.body;
  const autorUsuario= await selectAutorByUsuario(nombre);
  if(autorUsuario){
    return res.status(409).json({message: 'El usuario ya existe'});
  }
  const autorEmail = await selectAutorByEmail(email);
  if(autorEmail){
    return res.status(409).json({message: 'El coreo ya existe'})
  }
  next();

}

const comprobarIdPost= async(req, res,next)=>{
  const { idpost }= req.params;
  if(isNaN(idpost)){
    return res.status(400).json({ message: 'El id del post es incorrecto'})
  }
  const [post]= await selectPostById(idpost)
  if(post.length===0){
    return res.status(404).json({message: 'El post no existe'})
  }

  next();
}

const comprobarPost= async(req,res,next)=>{
 
  const [post]= await selectPostByTituloByAutor(req.body);
  if(post.length!==0){
    return res.status(409).json({message: 'Este Autor ya tiene un post con el mismo titulo'})
  }
  next();

}

module.exports={
    comprobarIdAutor, comprobarAutor, 
    comprobarPost, comprobarIdPost
}