const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const cors=require("cors")
const authRoutes = require('./routes/auth');
const uploadRoutes = require('./routes/upload');
const path = require('path');
dotenv.config();

const app=express();


mongoose.connect(process.env.URI).then(()=>{
    console.log("database is connected")
}).catch((err)=>{
    console.log(err)    
})



app.use(express.json());
app.use(cors());


app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); 

app.use('/api/auth', authRoutes);
app.use('/api/upload', uploadRoutes);



app.listen(9000,()=>{
    console.log("server is running at port 9000");
})