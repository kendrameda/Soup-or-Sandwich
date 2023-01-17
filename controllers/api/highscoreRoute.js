const router = require('express').Router();
const { User } = require('../../models');
router.get('/highscore', async (req, res) => {
    try {
        const userData = await User.findAll();
        const user = userData.map((user) => user.get({ plain: true }));

        console.log(user)
        res.render('highscore', {user})
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;