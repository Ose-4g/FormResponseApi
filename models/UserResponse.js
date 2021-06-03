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
            required: true
        },

        lastName: {
            type: String,
            required: true
        },

        emailAddress: {
            type: String,
            required: true
        },

        phoneNumber: {
            type: String,
            required: true
        },

        message: {
            type: String,
        },
    },
    {timestamps:true}
)

module.exports = mongoose.model('UserResponse', userResponseSchema);