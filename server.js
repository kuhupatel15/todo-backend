const express = require("express")
const cors=require('cors')
require("dotenv").config()
require('./db.js')
const todoRouter=require('./routes/todoroutes.js')
const bodyParser=require('body-parser')
const app = express()
app.use(cors({origin:"*"}))
app.use(bodyParser.json())
app.use(todoRouter)
app.listen(process.env.PORT,()=>{
    console.log(`server is runnin on http//localhost:${process.env.PORT}`);
})