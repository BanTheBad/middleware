const express = require('express');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
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
