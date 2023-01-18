const router = require('express').Router();
const { Photo, User } = require('../models');

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