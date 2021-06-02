const express = require('express')
const { get } = require('mongoose')
const router = express.Router()
const {handleFormRequest, getAllResponses} = require('../controllers/userResponseController')



router.post("/",handleFormRequest)
router.get("/",getAllResponses)

module.exports = router