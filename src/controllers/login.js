const passport = require('passport');

module.exports = function(req, res) {
    passport.authenticate('local', (err, user) => {
        // TODO: verify a user based on the database and user models
        return res.status(200).json({
            status: 'success',
            message: 'login success',
        });
    });
};
