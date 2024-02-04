const router = require('express').router();

const {
    createUser,
    getUserById,
    getAllUsers,
    updateUser,
    deletusFetus,
    addBestoFrendo,
    removeTraitor
} = require('../../controllers/userControllers');

router.route('/').get(getAllUsers).post(createUser);

