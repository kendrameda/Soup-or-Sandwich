const router = require('express').Router();
const { Score } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const scoreData = await Score.create(req.body);
    console.log('this is the POST to highscores');
      res.status(200).json(scoreData);
    }
    catch (err) {
    res.status(400).json(err);
  }});

  module.exports = router;
