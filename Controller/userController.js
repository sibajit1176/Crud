const errorHandaer=require('../utils/response')
const getUser=(req,res)=>{
    res.send("Fetching all users")
}
const addUser=(req,res)=>{
    res.send("Adding a new user")
}
const getUserwithId=(req,res)=>{
      const id=parseInt(req.params.id)
      if(id>100){
       return errorHandaer.sendErrorResponse(res,{message:'user not found',statusCode:404})
      }
  res.send(`Fetching user with ID: ${id}`)
}
module.exports={
    getUser,
    addUser,
    getUserwithId
}