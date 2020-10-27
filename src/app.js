const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const swaggerUi = require('swagger-ui-express');

const apiDoc = require('../infra/swagger/ban-the-bad-docs.json');
const { errorHandler } = require('./shared');

const adminRoutes = require('./admin/adminRoutes');
const authRoutes = require('./auth/authRoutes');
const caseRoutes = require('./cases/caseRoutes');
const userRoutes = require('./users/userRoutes');
const victimRoutes = require('./victims/victimRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/cases', caseRoutes);
app.use('/users', userRoutes);
app.use('/victims', victimRoutes);

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
