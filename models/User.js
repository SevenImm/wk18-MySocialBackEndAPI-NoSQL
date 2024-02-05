
const mongoose = require('mongoose');
// const assignmentSchema = require('./Assignment');

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
    },
    thoughts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Thought',
        },
    ],
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
}
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});
const User = mongoose.model('user', userSchema);

module.exports = User;