FROM node:14.2.0-slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --only=production
# If you are building your code for production
# RUN npm ci --only=production

RUN npm install -g nodemon


# Bundle app source
COPY . .

# https://medium.com/@sumankpaul/run-db-migration-script-in-docker-compose-ce8e447a77ba
COPY ./scripts/wait-for-it.sh ./wait-for-it.sh
RUN chmod +x wait-for-it.sh


EXPOSE 5000
CMD [ "npm", "run", "dev"]
