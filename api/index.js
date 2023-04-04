import express  from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors"
// import auth from "./api/routes/auth.js";
// import users from "./api/routes/users.js";
// import rooms from "./api/routes/rooms.js";
// import hotel from "./api/routes/hotels.js";
import auth from "./routes/auth.js";
import hotel from "./routes/hotels.js";
import rooms from "./routes/rooms.js";
import users from "./routes/users.js";
// import auth from "./routes/auth.js"
const app =express()
app.use(cors())
dotenv.config()
const connect= async()=>{
try{
    await mongoose.connect("mongodb+srv://shivam:12345@cluster0.9hxmd7j.mongodb.net/booking");
    console.log("connect mongodb")
} catch(error){
    throw error
}
};
mongoose.connection.on("disconnected",()=>{
    console.log('mongodb disconnect')
})
mongoose.connection.on("connected",()=>{
    console.log('mongodb connected')
})

// app.get("/users",(req,res)=>{
//     res.send("hello first request")
// })
//middleware

app.use(express.json());
app.use("/api/auth",auth);
app.use("/api/users",users);
app.use("/api/hotels",hotel);
app.use("/api/rooms",rooms);

app.use((err,req,res,next)=>{
    const errorStatus= err.status || 500
    const errorMessage= err.message || "something went wrong"
   return res.status(errorStatus).json({success:false,status:errorStatus,message:errorMessage,stack:err.stack})
})
app.listen(5000,()=>{
    connect()
    console.log("connect backend11")
})
