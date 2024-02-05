const { User, Thoughts } = require('../models');

const userCont = {
    // create user
    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => {
                res.json(dbUserData);
            }).catch((err) => {
                res.status(500).json(err);
            });
    },
    // get all users
    getAllUsers(req, res) {
        User.find({})
            .then((dbUserData) => {
                res.json(dbUserData);
            }).catch((err) => {
                console.error(err);
                res.status(500).json(err);
            })
    },
    // get one user
    getUserById(req, res) {
        User.findOne({ _id: req.params.userId })
            .populate('friends')
            .populate('thoughts')
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'User ID not found' });
                }
                res.json(dbUserData);
            }).catch((err) => {
                res.status(500).json(err);
            });
    },
    // update user parameters
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId },
            { $set: req.body, },
            {
                runValidators: true,
                new: true,
            }).then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'user Id not found' });
                }
                res.json(dbUserData);
            }).catch((err) => {
                console.error(err);
                res.status(500).json(err);
            });
    },
    // delete user
    deletusFetus(req, res) {
        User.findOneAndDelete(
            { _id: req.params.userId }).then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'user Id not found' });
                }
                res.status(200).json(dbUserData)
            }).catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    addBestoFrendo(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId },
            { $push: { friends: req.params.friendId } },
            { new: true }).then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'user Id not found' });
                }
                res.json(dbUserData);
            }).catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    removeTraitor(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true }).then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'user Id not found' });
                }
                res.json(dbUserData);
            }).catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
};

module.exports = userCont;