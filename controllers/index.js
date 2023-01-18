const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const gameRoutes = require('./gameRoutes');
const authRoutes = require('./auth-routes');

router.use('/api', apiRoutes);
router.use('/game', gameRoutes);
router.use('/', homeRoutes);
router.use('/auth', authRoutes);

module.exports = router;