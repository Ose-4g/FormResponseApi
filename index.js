require('dotenv').config({ path: './.env' })
const express = require("express");
const mongoose = require('mongoose')
const connectToMongo = require('./utils/connectToMongo')
const User = require('./models/UserResponse')
const userResponseRouter= require('./routes/userResponseRoutes')


//configuring express to use json and url encoded for post requests
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//setting the routers
app.use('/', userResponseRouter)


connectToMongo()



app.listen(process.env.PORT || 3000, ()=>{
    console.log("server running on port 3000")
})


