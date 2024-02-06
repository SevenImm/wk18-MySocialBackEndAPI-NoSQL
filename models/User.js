const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
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
        validate: {
            validator: function(t) {
                return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(t);
            }
        }
    },
    friends:[
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
        ],
    thoughts:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        }
        ],
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
}
);
// This virtual property returns the number of friends inside the array
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});
const User = model('User',userSchema);
// export model
module.exports = User;