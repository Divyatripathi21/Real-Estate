import express from 'express'
import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost:27017").then(()=>{
  console.log("connected to db");
})
.catch((err)=>{
  console.log(err);
})

const app=express();

app.listen(3000,()=>{
  console.log('server is running on port 3000')
})