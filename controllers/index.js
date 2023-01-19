const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const gameRoutes = require('./gameRoutes');
const authRoutes = require('./auth-routes');

router.use('/api', apiRoutes);
router.use('/game', gameRoutes);
router.use('/auth', authRoutes);
router.use('/', homeRoutes);


module.exports = router;