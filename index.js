const express = require('express')
const mongoose = require('mongoose')
const mongoDB="mongodb://localhost:27017/mongodb_project"
const UserRouter = require('./Routes/userRoute')
const bp = require('body-parser')

mongoose.set('strictQuery', false);
const app = express()

app.use(UserRouter,bp.json())             // middleware userRouter is used here to bridge between the techno,dbs into a single document

mongoose.connect(mongoDB, (err)=> {
    if(err) {
        console.log("DB is not connected");
    }
    else{
        console.log("DB is connected");
    }
})

app.listen(5000, ()=> {
    console.log("server started...");
})