
const mongoose = require('mongoose');
const assignmentSchema = require('./Assignment');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // use a regex to "validate" an email 
        match: [/.+@.+\..+/, 'Not an email address!'],
    }
    // thoughts once user is set up

    // Friends once user is completly set up
});

module.exports = user;