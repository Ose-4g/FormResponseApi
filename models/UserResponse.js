const mongoose = require('mongoose')

const userResponseSchema = new mongoose.Schema(
    {
        reason: {
            type: String,
            required : true
        },

        firstName: {
            type: String,
        },

        lastName: {
            type: String,
        },

        emailAddress: {
            type: String,
        },

        phoneNumber: {
            type: String,
        },

        message: {
            type: String,
        },
    }
)

module.exports = mongoose.model('UserResponse', userResponseSchema);