const router = require('express').Router();
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);

module.exports = router;