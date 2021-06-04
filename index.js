require('dotenv').config({ path: './.env' }) //used to read .env files
const express = require("express") 
const mongoose = require('mongoose')
const connectToMongo = require('./utils/connectToMongo')
const userResponseRouter= require('./routes/userResponseRoutes')


//configuring express to use json and url encoded for post requests
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//setting the routers
app.use('/', userResponseRouter)

//make a connection to the MongoDB Database
connectToMongo()

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, ()=>{
    console.log("server running on port 8000")
})


