import express from "express";
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv";

const app=express()

app.use(express.json())
app.use(cors())
dotenv.config()

function connection(){
    mongoose.connect(process.env.MONGODB).then(()=>{
        console.log("Database Connected")
    }).catch((error)=>{
        console.log(error);
        throw error;
    })
}

// app.use("/",)

app.listen(process.env.PORT || 8000 , function(){
    connection();
    console.log("Server started in port" ,process.env.PORT || 8000)
})

