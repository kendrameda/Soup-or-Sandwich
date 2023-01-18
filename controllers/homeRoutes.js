const router = require('express').Router();
const { Photo, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        const photoData = await Photo.findAll();
        // serialized
        const photo = photoData.map((photo) => photo.get({ plain: true }));

        res.render('joke', { photo })
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

router.get('/game', async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            // include: [{ model: Project }], - !!! include scores?
        });
        const user = userData.get({ plain: true });
        console.log(user);

        const photoData = await Photo.findAll();
        console.log(photoData);

        // Pass serialized data and session flag into template
        res.render('game', {
            ...user,
            photoData,
            //   logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(510).json(err);
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
