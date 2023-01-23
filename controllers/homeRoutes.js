const router = require('express').Router();
const { Photo, Score } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        const photoData = await Photo.findAll({
            attributes: ["type", "image"]
        });
        // serialized
        const photo = photoData.map((photo) => photo.get({ plain: true }));

        res.render('joke', { photo })

    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;
