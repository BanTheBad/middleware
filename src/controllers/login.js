const passport = require('passport');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('inside login middleware');
    return res.status(200).json({
        status: 'success',
        message: 'login success',
    });
    /*
    passport.authenticate('local', { failureRedirect: '/' }, (err, user) => {
        // TODO: verify a user based on the database and user models
        return res.status(200).json({
            status: 'success',
            message: 'login success',
        });
    });
    */
});

module.exports = app;
