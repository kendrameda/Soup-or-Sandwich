const router = require('express').Router();
const { Photo, User } = require('../models');
// const level = require('../public/js/game');
const withAuth = require('../utils/auth');

// /game
router.get('/', withAuth, async (req, res) => {
    console.log('---in gameroutes');
    // console.log(level);
    try {
        const photoData = await Photo.findAll({
            where: {type: 'soup',}
        });
        // serialized
        const photo = photoData.map((photo) => photo.get({ plain: true }));

        console.log('---photos: ', photo)
        res.render('game', {photo})
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports=router;