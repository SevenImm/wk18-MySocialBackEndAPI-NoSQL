const { Schema, Types, } = require('mongoose');

const reactSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
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
            get: timestamp => new Date(timestamp).toLocaleDateString()
        },
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

module.exports = reactSchema;