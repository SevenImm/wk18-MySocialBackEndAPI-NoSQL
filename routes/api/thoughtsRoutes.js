const router = require('express').Router();

const {
    createThoughts,
    getThoughtsById,
    getAllThoughts,
    updateThoughts,
    undoThougths,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtsControllers');

router.route('/').get(getAllThoughts).post(createThoughts);

router.route('/:thoughtId').get(getThoughtsById).put(updateThoughts).delete(undoThougths);

router.route('/:thoughtId/reaction/:reactionId').post(addReaction).delete(removeReaction);

module.exports = router;

