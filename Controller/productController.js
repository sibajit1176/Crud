const productServices=require('../services/productService')
const getProduct=(req,res)=>{
    const result=productServices.getAllProducts()
        res.send(result)
}
const addProduct=(req,res)=>{
    const result=productServices.addProduct()
        res.send(result)
}
const getProductwithId=(req,res)=>{
     const result=productServices.getProductById(req.params.id)
        res.send(result)
}
module.exports={
    getProduct,
    addProduct,
    getProductwithId
}