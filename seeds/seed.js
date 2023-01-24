const sequelize = require('../config/connection');
const Photo = require('../models/Photo');
const photoData = require('./photoData');
const Score = require('../models/Score');
const scoreData = require('./scoreData');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Photo.bulkCreate(photoData, {
        individualHooks: true,
        returning: true,
    });

    await Score.bulkCreate(scoreData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();