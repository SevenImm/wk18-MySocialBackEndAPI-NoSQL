const router = require('express').Router();
const courseRoutes = require('./thoughtsControllers');
const studentRoutes = require('./userControllers');

router.use('/thoughts', thoughtsRoutes);
router.use('/users', userRoutes);

module.exports = router;
