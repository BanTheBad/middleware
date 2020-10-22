const { config } = require('dotenv');

config();

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: process.env.DATABASE_DIALECT,
    logging: false,
  },
  test: {
    url: process.env.DATABASE_TEST_URL,
    dialect: process.env.DATABASE_DIALECT,
    logging: process.env.DATABASE_DEBUG,
  },
  staging: {
    url: process.env.DATABASE_URL,
    dialect: process.env.DATABASE_DIALECT,
    logging: process.env.DATABASE_DEBUG,
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: process.env.DATABASE_DIALECT,
    logging: process.env.DATABASE_DEBUG,
  },
};
