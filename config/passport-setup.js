const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const dotenv = require('dotenv')
const User = require('../models/User')

passport.serializeUser((user, done) => {
    // user.id is from mongodb
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findByPk(id).then((user) => {
        done(null, user);
    })
});

passport.use(
    new GoogleStrategy({
        // options for the strategy
        callbackURL: '/auth/google/redirect',
        clientID: process.env.GCLIENTID,
        clientSecret: process.env.GCLIENTSECRET,
        scope: ['profile']
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function

        // check if user already exists in our db
        User.findOne({ where: { googleId: profile.id } }).then((currentUser) => {
            if (currentUser) {
                // already have the user
                done(null, currentUser);
            } else {
                // if not, create user in our db
                User.create({
                    username: profile.displayName,
                    googleId: profile.id
                    //saves to our database, mongoose
                }).then((newUser) => {
                    done(null, newUser);
                });
            }
        });

    })
);

module.exports = passport;