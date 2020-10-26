const { Router } = require('express');
const passport = require('passport');

const {
  authenticateWithGoogle, googleCb, login,
} = require('./authController');

const router = Router();

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
  authenticateWithGoogle,
);

router.get('/google/callback', passport.authenticate('google'), googleCb);

router.post('/login', login);

module.exports = router;
