const { config } = require('dotenv');
const http = require('http');

const logger = require('./helpers/logger');
const app = require('./app');

config();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, () => logger.info(`server on http://localhost:${PORT}`));
