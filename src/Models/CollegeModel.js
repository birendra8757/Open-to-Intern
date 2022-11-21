const mongoose=require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId


const collegeSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            unique: true,
        },
        fullName:
        {
            type: String,
            required: true
        },
        logoLink: {
            type: String,
            required: true,
        },
        isDeleted: {
            default: false,
            type: Boolean
        }
    },
    { timestamps: true });


    module.exports = mongoose.model('college', collegeSchema)