const router = require('express').Router();
const { Photo, User } = require('../models');
<<<<<<< HEAD

// /game
// router.get('/', async (req, res) => {
//     console.log('---in gameroutes, level 1');
//     try {
//         const photoData = await Photo.findAll({
//             where: {type: 'soup',}
//         });
//         // serialized
//         const photo = photoData.map((photo) => photo.get({ plain: true }));

//         console.log('---photos: ', photo)
//         res.render('game', {photo})
//     } catch (err) {
//         res.status(500).json(err);
//         console.log(err);
//     }
// });

router.get('/:type', async (req, res) => {
=======
// const level = require('../public/js/game');
const withAuth = require('../utils/auth');

// /game
router.get('/', withAuth, async (req, res) => {
>>>>>>> 4de57f1908daf86ff59c1ba95252c44101e46e4c
    console.log('---in gameroutes');
    try {
        const photoData = await Photo.findAll({
            where: {type: req.params.type,}
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