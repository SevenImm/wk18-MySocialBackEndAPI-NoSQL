const { Schema, Types, default: mongoose } = require('mongoose');

const reactSchema = new mongoose.Schema (
    {
        reactionId: {
            type: mongoose.Schema.Types.ObjectId,
            default: () => new Types.ObjectId,
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            deafault: Date.now,
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

module.exports = reactSchema;