const getUser=(req,res)=>{
    res.send("Fetching all users")
}
const addUser=(req,res)=>{
    res.send("Adding a new user")
}
const getUserwithId=(req,res)=>{
      const id=req.params.id
  res.send(`Fetching user with ID: ${id}`)
}
module.exports={
    getUser,
    addUser,
    getUserwithId
}