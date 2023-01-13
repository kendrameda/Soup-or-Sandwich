const sequelize = require('../config/connection');
const User = require('../models/User');
const userData = require('./userData');
const Photo = require('../models/Photo');
const photoData = require('./photoData');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Photo.bulkCreate(photoData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();