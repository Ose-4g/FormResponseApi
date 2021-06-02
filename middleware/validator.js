const validator = require('validator')//module 
const{reasons} = require('../controllers/userResponseController')//list of reasons from the controller



const checkPhoneNumberIsValid = (phoneNumber)=>{
    //Checks if phoneNUmber is a valid phone number
    return validator.isMobilePhone(phoneNumber)
}


const checkEmailAddressIsValid = (emailAddress)=>{
    //checks if emailAddress is a valid email address
    return validator.isEmail(emailAddress)
}


const checkReason = (reason)=>
{
    //returns true if the reason is valid
    if(validator.isDecimal(reason))
    {
        const num = parseInt(reason)
        if(num<reasons.length && num>=0)
        {
            return true
        }
    } 
    return false
}


const checkFormInput = (req,res,next)=>{
    /**
     * Checks the input of the form to be sure its valid
     */
    let formInput = req.body


    let reasonCheck = checkReason(formInput.reason)
    let firstNameCheck = formInput.firstName.length > 0
    let lastNameCheck = formInput.lastName.length > 0
    let emailCheck = checkEmailAddressIsValid(formInput.emailAddress)
    let phoneNumberCheck = checkPhoneNumberIsValid(formInput.phoneNumber)

    console.log("reason = "+ formInput.reason)

    console.log(reasonCheck+ "  " + firstNameCheck+ "  " + lastNameCheck + "   "+ emailCheck + "   "+ phoneNumberCheck+ "    ")
    if(reasonCheck && firstNameCheck && lastNameCheck && emailCheck && phoneNumberCheck)
    {
        return next()
    }
    else
    {
        error = ""
        
        if(!reasonCheck)
        {
            error+= "Invalid reason boss    "
        }
        if(!firstNameCheck)
        {
            error += "First name cannot be blank   "
        }

        if(!lastNameCheck)
        {
           error += "Last name cannot be blank   "
        }

        if(!emailCheck)
        {
            error += "incorrect email address.   "
        }

        if(!phoneNumberCheck)
        {
            error += "Incorrect phone number   "
        }

        return res.status(500).json({
            error: error
        })

    }

}

module.exports =  {
    checkFormInput
}