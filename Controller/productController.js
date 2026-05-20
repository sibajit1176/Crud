const getProduct=(req,res)=>{
        res.send("Fetching all products")
}
const addProduct=(req,res)=>{
    res.send("Adding a new product")
}
const getProductwithId=(req,res)=>{
     const id=req.params.id
  res.send(`Fetching product with ID: ${id}`)
}
module.exports={
    getProduct,
    addProduct,
    getProductwithId
}