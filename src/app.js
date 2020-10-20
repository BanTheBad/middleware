const express = require('express');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const { OAuth2Strategy: GoogleStrategy } = require('passport-google-oauth');
const apiDoc = require('../docs/ban-the-bad-docs.json');
const controllers = require('./controllers');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy((username, password, done) => {
  // TODO: authenticate based on the database and user model
  done(null, true);
}));

// Google Oauth strategy
passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `http://localhost:${process.env.PORT}/auth/google/callback`,
  },
  (accessToken, refreshToken, profile, done) => {
    // TODO: check tokens as necessary
    return done(null, profile);
  }
));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(apiDoc));

app.use('/login', controllers.login);

app.get('/', (_, response) => {
  response.status(200).json({
    status: 'success',
    message: 'welcome to "BanTheBad" API',
  });
});

app.all('*', (_, response) => {
  response.status(404).json({
    status: 'error',
    error: 'resource not found',
  });
});

app.use(errorHandler);

passport.serializeUser((user, done) => {
  // TODO: update this based on the database and user models
  done(null, user);
});

passport.deserializeUser((user, done) => {
  // TODO: update this based on the database and user models
  done(null, user);
});

module.exports = app;
