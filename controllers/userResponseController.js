const User = require('../models/UserResponse')
const reasons = ['I have a question about the service',
    'I want to speak to an employee',
    'I would like to schedule a physical appointment',
    'My option is not listed above']


const handleFormRequest = async(req,res,next)=>{

    //creates the user object using the mongoose schema
    let user = new User(req.body)
    const index = parseInt(req.body.reason)
    user.reason = reasons[index]

    //saving the data to the database
    try {
        await user.save();
        res.send(user);
        console.log(user)

      } catch (error) {
        res.status(500).send(error);
      }

}

const getAllResponses = async(req,res,next) =>{
    
    //options to filter the 
    const options = req.query
    
    try{
        const result = await User.find(options)
        res.json(result)
    }
    catch(error)
    {
        res.status(500).send(error)
    }
}


module.exports = {
    handleFormRequest,
    getAllResponses
}