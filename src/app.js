const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const swaggerUi = require('swagger-ui-express');

const apiDoc = require('../docs/ban-the-bad-docs.json');
const errorHandler = require('./middleware/errorHandler');
const router = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(passport.initialize());
app.use(passport.session());

app.use(router);
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
