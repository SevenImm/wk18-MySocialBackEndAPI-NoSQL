const { User, Thoughts } = require('../models');

const userCont = {
    // create user
    createUser(req, res) {
        User.create(req.body)
        .then((dbUserData) => {
            res.json(dbUserData);
        }).catch((err)=> {
            console.err(err);
            res.status(500).json(err);
        });
    },
    getAllUsers(req, res) {
        User.find({})
            .then((dbUserData) => {
                res.json(dbUserData);
            }).catch((err) => {
                console.error(err);
                res.status(500).json(err);
            })
    },

}