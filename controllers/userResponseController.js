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
        res.send("Your resonse has been saved. Thank you for your time");

      } catch (error) {
        res.status(500).send(error);
      }

}

const getAllResponses = async(req,res,next) =>{
    
    let { page = 1, limit = 10 } = req.query;

    //options to filter based on field
    const options = req.query
    delete options.page
    delete options.limit

    //pagination
    limit = parseInt(limit)
    page = parseInt(page)

    page = Math.max(1,page)
    limit = Math.max(1,limit)


    try{
        const result = await User.find(options).sort({createdAt: -1})
        .select('-__v -updatedAt -createdAt')
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();


        const count = await User.countDocuments(options);

        let answer = {
            currentPage: page,
            numberOfResponsesOnCurrentPage: result.length, 
            totalNumberOfResponses: count,
            totalNumberOfPages: Math.ceil(count / limit),
            results: result
        }
        res.status(200).json(answer)
    }
    catch(error)
    {
        res.status(500).send(error)
    }
}


module.exports = {
    handleFormRequest,
    getAllResponses,
    reasons
}