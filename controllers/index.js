const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const gameRoutes = require('./gameRoutes');

router.use('/api', apiRoutes);
router.use('/game', gameRoutes);
router.use('/', homeRoutes);

module.exports = router;