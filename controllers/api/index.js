const router = require('express').Router();
const userRoutes = require('./userRoutes');
const highscoreRoutes = require('./highscoreRoute');

router.use('/user', userRoutes);
router.use('/highscore', highscoreRoutes);

module.exports = router;