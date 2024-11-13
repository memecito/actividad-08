const {selectAll, selectIdAutor, createAutor, updateAutorById, deleteById}= require("../models/autoresmodel");
const { selectPostIdAutor } = require("../models/postmodel");

const getAllAutores = async(req,res,next)=>{
    try{
        const [result, fieldpaquet]= await selectAll();
        console.log('peticion ejecutada');
        res.json(result);
    }catch(error){
        next(error);
    }
}

const getIdAutor= async(req,res,next)=>{
    const { idautor } = req.params;
    try{
        const result=await selectIdAutor(idautor);
        
            res.json(result)
    }catch(error){
        next(error);
    }
}

const getAutoresPost= async(req, res, next)=>{
    try {
        const [autores]= await selectAll();
        // 
        const promAutoresPost= autores.map(autor=> selectPostIdAutor(autor.idautor))
        const postresult =await Promise.all(promAutoresPost);   
        autores.forEach((autor, index)=> autor.posts = postresult[index][0] )
        
        res.json(autores)
    } catch (error) {
        next(error)
    }

}


const postAutor= async(req,res,next)=>{
    
    try {
        const [result, fieldpaquet]=await createAutor(req.body);
       
        //recuperamos los datos del autor para confirmar que se ha creado bien
        const autor= await selectIdAutor(result.insertId);
        if (!autor)
        {
            return res.json(null)
        }
        res.json(autor)       
       
    } catch (error) {
        next(error);   
    }
}

const putAutor= async(req, res, next)=>{
    const { idautor } = req.params;
    try {
       const [result]=await updateAutorById(idautor,req.body);
       if(result.affectedRows===0){
         return  res.json({message: 'La consulta no se ha podido realizar'})
       }
      res.json(await selectIdAutor(idautor));
       
    } catch (error) {
        next(error)
    }

}
const deleteAutorById= async(req, res, next)=>{
    const {idautor}= req.params;
    try {
       const [result]= await deleteById(idautor);
       if(result.affectedRows===0){
        return  res.json({message: 'La consulta no se ha podido realizar'})
      }
      res.json({message: 'Autor eliminado'})
    } catch (error) {
        next(error);
    }
}



module.exports={
    getAllAutores, getIdAutor, postAutor, putAutor, deleteAutorById, getAutoresPost
}