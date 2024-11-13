const {selectAllPost}= require("../models/postmodel")
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
    
} catch (error) {
    
}
}

const getAllCategories=async(req,res,next)=>{
    try {
        
    } catch (error) {
        next(error)
    }
}

module.exports={
    getAllPost, getAllCategories,getPostAutores
}