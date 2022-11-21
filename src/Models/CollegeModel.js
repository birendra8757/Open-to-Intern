const collegeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
        },
        fullName:
        {
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


    module.exports = mongoose.model('College', CollegeSchema)