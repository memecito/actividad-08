const { selectIdAutor, selectAutorByUsuario, selectAutorByEmail } = require("../models/autoresmodel");

const comprobarId =async (req, res, next)=>{
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

module.exports={
    comprobarId, comprobarAutor
}