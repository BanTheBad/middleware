const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const { OAuth2Strategy: GoogleStrategy } = require('passport-google-oauth');

const googleCb = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'google signin success',
  });
};

const authenticateWithGoogle = () => { };

const login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/'); }

    req.logIn(user, (innerErr) => {
      if (innerErr) { return next(innerErr); }
      return res.redirect('/');
    });
  })(req, res, next);
};

const setupPassport = () => {
  passport.use(
    new LocalStrategy((username, password, done) => done(null, true)),
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `http://localhost:${process.env.PORT}/auth/google/callback`,
      },
      (accessToken, refreshToken, profile, done) => done(null, profile),
    ),
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};

setupPassport();

module.exports = {
  googleCb,
  authenticateWithGoogle,
  login,
};
