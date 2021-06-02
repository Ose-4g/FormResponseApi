const express = require('express')
const router = express.Router()
const {handleFormRequest, getAllResponses} = require('../controllers/userResponseController')
const {checkFormInput} = require('../middleware/validator')


router.post("/",checkFormInput,handleFormRequest)
router.get("/",getAllResponses)

module.exports = router