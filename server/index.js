const express=require('express');
const app=express()
var cors = require('cors')
app.use(express.json());
const connectDB = require('./connection');
const router = require('./routes');
require('dotenv').config()

app.use(cors())
app.use('/',router)


const start=async(req,res)=>{

    try {
          await connectDB(process.env.MONGO_CDN_URL)
          app.listen(5000,(req,res)=>{
 console.log('success')
          })
         
    } catch (error) {
        console.log(error)
    }
       


}
start()