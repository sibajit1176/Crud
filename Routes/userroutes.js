const express=require('express')
const userController=require('../Controller/userController')
const router=express.Router()

router.get('/',userController.getUser)
router.post('/',userController.addUser)
router.get('/:id',userController.getUserwithId)

module.exports=router