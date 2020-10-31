FROM node:14.2.0-slim

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

# Bundle app source
COPY . .

# https://medium.com/@sumankpaul/run-db-migration-script-in-docker-compose-ce8e447a77ba
COPY ./scripts/wait-for-it.sh ./wait-for-it.sh
RUN chmod +x wait-for-it.sh

EXPOSE 5000
CMD [ "node", "server.js"]
