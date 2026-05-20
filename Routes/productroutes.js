const express=require('express')
const productController=require('../Controller/productController')
const router=express.Router()

router.get('/',productController.getProduct)
router.post('/',productController.addProduct)
router.get('/:id',productController.getProductwithId)

module.exports=router