const mongoose = require('mongoose')


//Schema Design
const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "name is required"],
        },
        email:{
            type: String,
            required: [true, "email is required amd should be unique"],
            unique: true,
        },
        password:{
            type: String,
            required: [true, "password is required"],
        },
    },
    { timestamps: true }
)

//export
const userModel = mongoose.model('users', userSchema);
modele.exports = userModel;