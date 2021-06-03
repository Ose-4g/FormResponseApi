const express = require('express')
const router = express.Router()
const {handleFormRequest, getAllResponses} = require('../controllers/userResponseController')
const {checkFormInput} = require('../middleware/validator')


router.post("/",checkFormInput,handleFormRequest)
router.get("/",getAllResponses)

//all other non specified routes should lead to error 404
router.get("*",(req,res)=>{
    res.status(404).json({
        error:"error 404 This page doesn't exist"
    })
})

module.exports = router