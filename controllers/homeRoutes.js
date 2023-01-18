const router = require('express').Router();
const { Photo, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        const photoData = await Photo.findAll();
        // serialized
        const photo = photoData.map((photo) => photo.get({ plain: true }));

        console.log(photo)
        res.render('joke', { photo })
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

router.get('/highscore', withAuth, async (req, res) => {
    try {
        const userData = await User.findAll();
        const user = userData.map((user) => user.get({ plain: true }));

        console.log(user)
        res.render('highscore', { user })
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;
