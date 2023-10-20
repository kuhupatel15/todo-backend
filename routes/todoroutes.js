const express=require('express')
const router=express.Router()
const todoController=require('../controllers/todoController.js')




router.post('/todo',todoController.createTodo)
router.get('/todo',todoController.getTodo)
router.delete('/todo/:id',todoController.deleteTodo)
router.put('/todo/update',todoController.updateTodo)
module.exports=router