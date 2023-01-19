const router = require('express').Router();
const { Photo} = require('../models');
const withAuth = require('../utils/auth');

// add withauth back in !!!!!!!!!!!!!!!!!!!
// /game
router.get('/:type', async (req, res) => {
    console.log('---in gameroutes');
    try {
        const photoData = await Photo.findAll({
            where: { type: req.params.type, }
        });
        // serialized
        const photo = photoData.map((photo) => photo.get({ plain: true }));

        console.log('---photos: ', photo)
        res.render('game', { photo })
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;