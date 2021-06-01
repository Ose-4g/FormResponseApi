require('dotenv').config({ path: './.env' })
const express = require("express");
const mongoose = require('mongoose')
const connectToMongo = require('./utils/connectToMongo')



const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToMongo()



app.listen(process.env.PORT || 30000, ()=>{
    console.log("server running on port 3000")
})
