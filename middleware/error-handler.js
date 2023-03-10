const{CustomAPIError}=require('../errors/custom-error')

const errorHandler=(err,req,res,next)=>{
    if (err instanceof CustomAPIError){
        return res.status(err.status).json({msg:err.message})
    }
    return res.status(500).json({msg:'Somethign went wrong please try again!!'})
}

module.exports=errorHandler