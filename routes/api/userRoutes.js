const router = require('express').Router();

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

router.route('/:userId').get(getUserById).put(updateUser).delete(deletusFetus);

router.route('/:userId/friends/:friendsId').post(addBestoFrendo).delete(removeTraitor);

module.exports = router;

