const mongoose = require('mongoose')

const userResponseSchema = new mongoose.Schema(
    {
        reason: {
            type: String,
            required : true,
            default : '0',
            required: true
        },

        firstName: {
            type: String,
            required: [true,'firstname cannot be empty'],
            trim:true
        },

        lastName: {
            type: String,
            required:[ true,'lastName cannot be empty'],
            trim:true
        },

        emailAddress: {
            type: String,
            required: [true,'email address cannot be empty'],
            trim: true
        },

        phoneNumber: {
            type: String,
            required: [true,'phone Number cannot be empty'],
            trim: true
        },

        message: {
            type: String,
        },
    },
    {timestamps:true}
)

module.exports = mongoose.model('UserResponse', userResponseSchema);