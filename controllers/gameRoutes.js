const router = require('express').Router();
const { Photo, Score} = require('../models');
const withAuth = require('../utils/auth');


router.get('/highscore', withAuth, async (req, res) => {
    try {
        const scoreData = await Score.findAll();
        const score = scoreData.map((score) => score.get({ plain: true })).sort((a,b) => (a.score < b.score) ? 1 : -1);

        res.render('highscore', { score })
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

router.get('/:type', async (req, res) => {
    try {
        const photoData = await Photo.findAll({
            where: { type: req.params.type, }
        });
        // serialized
        const photo = photoData.map((photo) => photo.get({ plain: true }));

        res.render('game', { photo })
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;