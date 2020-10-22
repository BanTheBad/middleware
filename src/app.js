const express = require('express');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const passport = require('passport');

const apiDoc = require('../docs/ban-the-bad-docs.json');
const errorHandler = require('./shared/errorHandler');

const admin = require('./admin/adminRoutes');
const cases = require('./cases/casesRoutes');
const contributors = require('./contributors/contributorsRoutes');
const victims = require('./victims/victimsRoutes');
const auth = require('./auth/authRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', auth);
app.use('/admin', admin);
app.use('/cases', cases);
app.use('/contributors', contributors);
app.use('/victims', victims);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(apiDoc));

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

module.exports = app;
