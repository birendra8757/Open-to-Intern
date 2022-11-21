const mongoose = require('mongoose')
const collegeSchema = new mongoose.Schema(
    {
        name: {
            lowercase : true,
            type : String,
            unique : true,
        },
        fullName :
        {
            type : String,
            required : true
        },
        logoLink : {
            type : String,
            required : true,
        },
        isDeleted : {
            default : false,
            type : Boolean
        }
    },
    { timestamps : true });


    module.exports = mongoose.model('College',collegeSchema)