const { Thoughts, User, Reaction } = require('../models');
const { Types } = require('mongoose');

const thoughtCont = {
    // create thought
    async createThoughts(req, res) {
        try {
            const thought = await Thoughts.create(req.body);
            res.status(201).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get all thoughts
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thoughts.find({});
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Get single thought
    async getThoughtsById(req, res) {
        try {
            const thought = await Thoughts.findOne({ _id: req.params.thoughtId });
            if (!thought) {
                res.status(400).json({ message: 'Thought not found' });
            } else {
                res.json(thought);
            }
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // update thoughts
    async updateThoughts(req, res) {
        try {
            const thought = await Thoughts.findByIdAndUpdate(req.params.thoughtId, req.body, {
                new: true,
            });
            if (!thought) {
                res.status(404).json({ message: 'Thought not found' });
            } else {
                res.json(thought);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // remove thoughts
    async undoThougths(req, res) {
        try {
            const thought = await Thoughts.findByIdAndDelete({ _id: req.params.thoughtId });
            res.status(200).json('thought successfully deleted!')
            // console.log('Deleted successfully!');
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // add your reaction
    async addReaction(req, res) {
        try {
            const thought = await Thoughts.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true }
            );
            thought ? res.json(thought) : res.status(404).json({ message: notFound })
        } catch (err) {
            res.status(500).json(err);

        }
    },
    // remove reaction
    async removeReaction(req, res) {
        try {
            const thought = await Thoughts.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { runValidators: true, new: true }
            );
            thought ? res.json(thought) : res.status(404).json({ message: notFound });
        } catch (err) {
            res.status(500).json(err);
        }
    },
}
module.exports = thoughtCont;