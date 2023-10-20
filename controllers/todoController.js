const Todo=require('../models/todoModel.js')
const mongoose=require('mongoose')
module.exports = {
    createTodo : async (req,res)=>{
        const {title,description}=req.body
        console.log(title,description)
        try{

            const todo=await new Todo({
                title:title,
                description
            })
            todo.save()
            res.status(201).json({message:"Successfully created todo item"})
        }
        catch(err){
            console.log(err)
            res.status(500).json({message:"Something went wrong"})

        }

        
    },
    getTodo:async(req,res)=>{
        try{
            const data=await Todo.find()
            if(data.length>0){
                res.status(200).json({message:"data fetch successfully",data:data})

            }
        }
        catch(err){
            console.log(err)
            res.status(500).json({message:"Something went wrong"})
        }
    },
    deleteTodo:async(req,res)=>{
        try{
            await Todo.findByIdAndDelete(req.params.id);
            res.status(200).json({message:"Successfully deleted"})
        }
        catch(err){
            console.log(err)
            res.status(500).json({message:"Somthing went wrong"})
        }
    },
    updateTodo:async(req,res)=>{
        const {title,description,id}=req.body
        try{
           updatedData= await Todo.findOneAndUpdate({_id:id},{title:title,description:description})
        //    updatedData.save()
            res.json({message:"Successfully updated",user:updatedData})
        }
        catch(err){
            console.log(err)
            res.status(500).json({message:"Something went wrong!"})
        }
    }
}