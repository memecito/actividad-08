const {selectAll}= require("../models/postmodel")
const getAllPost = async(req, res, next)=>{
    try{
        const [result, fieldpaquet]= await selectAll();
        res.json(result);
    }catch(error){
        next(error);
    }
}

const getAllCategories=async(req,res,next)=>{
    try {
        
    } catch (error) {
        next(error)
    }
}

module.exports={
    getAllPost, getAllCategories
}