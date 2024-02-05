const { Thought, User } = require('../models');

const thoughtCont = {
    // create Thought
    createThoughts({ params, body }, res) {
        Thought.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: body.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res
                        .status(404)
                        .json({ message: "user Id not found" });
                }
                res.json({ message: "Tought created successfully!" });
            }).catch((err) => res.json(err));
    },
    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .populate({
                path: "reactions",
                select: "-__v",
            })
            .select("-__v")
            .sort({ _id: -1 })
            .then((dbThougthData) => res.json(dbThougthData))
            .catch((err) => {
                console.log(err);
                res.sendStatus(400);
            });
    },
    // Get single thought
    getThoughtsById({ params }, res) {
        Thought.findOne({ _id: params._id })
            .populate({
                path: "reactions",
                select: "-__v",
            })
            .select("-__v")
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    return res.stauts(404).json({ message: "No thought with this id" });
                }
                res.json(dbThoughtData);
            }).catch((err) => {
                console.log(err);
                res.sendStatus(400);
            });
    },
    // update thoughts
    updateThoughts({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, {
            new: true,
            runValidators: true,
        })
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: "No thought found with this id" });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch((err) => res.json(err));
    },
    // remove thoughts
    undoThougths({ params }, res) {
        Thought.findoneAndDelete({ _id: params.id })
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    return res.status(404).json({ message: "No thought with this id" });
                }

                return User.findOneAndUpdate({
                    thoughts: params.id
                },
                    { $pull: { thoughts: params.id } },
                    { new: true }
                );
            }).then((dbUserData) => {
                if (!dbUserData) {
                    return res
                        .status(404)
                        .json({ message: "Thought created but no user with this id" });
                }
                res.json({ message: "Thought successfully deleted!" });
            })
            .catch((err) => res.json(err));
    },
    // add your reaction
    addReaction({ params, body }, res) {
        Thought.findOneAndUpdate({
            _id: params.thoughtId
        },
            { $addToSet: { reactions: body } },
            { new: true, runValidators: true }
        )
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: "No thought with this id" });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch((err) => res.json(err));
    },
    // remove reaction
    removeReaction({ params }, res) {
        Thought.findOneAndUpdate({
            _id: params.thoughtId
        },
            { $pull: { reactions: { reactionId: params.reactionId } } },
            { new: true }
        )
            .then((dbThoughtData) => res.json(dbThoughtData))
            .catch((err) => res.json(err));
    },
};

module.exports = thoughtCont;