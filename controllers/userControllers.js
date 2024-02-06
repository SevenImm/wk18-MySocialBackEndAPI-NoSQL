const { User } = require('../models');

const userCont = {
    // create user
    createUser(req, res) {
        User.create(req.body)
            .then((userData) => {
                res.json(userData)
            }).catch((err) => res.status(500).json(err));
    },
    // get all users
    getAllUsers(req, res) {
        User.find({})
            .then((userData) => res.json(userData)
            ).catch((err) => {
                res.status(500).json(err);
            });
    },
    // get one user
    getUserById(req, res) {
        User.findById(req.params.userId)
            .then((userData) => {
                res.json(userData)
            }).catch((err) => {
                res.status(500).json(err)
            });
    },
    // update user parameters
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId },
            { $set: req.body, },
            {
                runValidators: true,
                new: true,
            }).then((userData) => {
                if (!userData) {
                    return res.status(404).json({ message: 'user Id not found' });
                }
                res.json(userData);
            }).catch((err) => {
                console.error(err);
                res.status(500).json(err);
            });
    },
    // delete user
    deletusFetus(req, res) {
        User.findOneAndDelete(
            { _id: req.params.userId }).then((userData) => {
                if (!userData) {
                    return res.status(404).json({ message: 'user Id not found' });
                }
                res.status(200).json(userData)
            }).catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    addBestoFrendo(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.body.friendId || req.params.friendId} },
            { new: true }
          ).then((userData => {
              if (!userData) {
                return res.status(404).json({ message: 'User not found' });
              }
              res.json(userData);
          })).catch(err => res.status(500).json(err));
          },

          removeTraitor(req, res) {
            User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendsId } },
                { new: true }
              )
                .then((userData) => {
                  if (!userData) {
                    return res.status(404).json({ message: "No user with this id" });
                  }
                  const removed = !userData.friends.includes(req.params.friendId);
                  if (removed) {
                    res.json({ message: "Friend removed successfully!", userData });
                  } else {
                    res.json(userData);
                  }
                })
                .catch((err) => res.status(400).json(err));
            }
                }

module.exports = userCont;