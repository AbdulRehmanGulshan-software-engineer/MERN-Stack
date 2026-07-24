const mongoose = require('mongoose');

//making schema
// _id is automatically added by mongoose
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Last name is required']
    },
    lastName: String,
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    userType: {
        type: String,
        enum: ['guest', 'host'],
        default: 'guest'
    }
});

module.exports = mongoose.model("User", userSchema);