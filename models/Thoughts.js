const { Schema, model, default: mongoose } = require('mongoose');
const reactSchema = require('./Reaction');

const thoughtSchema = new mongoose.Schema(
    {
        thoughtInput: {
            type: String,
            required: true,
        },

        createdAt: {
            type: Date,
            default: Date.now(),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Reaction",
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

const Thought = model("thoughts", thoughtSchema);

module.exports = Thought;