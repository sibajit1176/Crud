const path=require('path')
const productServices=require('../services/productService')
const getProduct=(req,res)=>{
    const result=productServices.getAllProducts()
        res.sendFile(path.join(__dirname,'..','View','index.html'))
}
const addProduct=(req,res)=>{
    const result=productServices.addProduct(req.body)
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