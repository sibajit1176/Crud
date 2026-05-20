const express=require('express')
const router=express.Router()
const cartController=require('../Controller/cartController')

router.post('/:userId',cartController.addCart)
router.get('/:userId',cartController.fetchCart)

module.exports=router