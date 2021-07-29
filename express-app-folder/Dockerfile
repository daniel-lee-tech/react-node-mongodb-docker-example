# `AS` statement is needed to name the image, this prevents name collision with other containers using the same node image.
FROM node:latest AS express-container-image
# use specific version of node in production

WORKDIR /app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY ./package*.json ./

# Copy app source code into container
COPY . .

RUN npm install -g npm
RUN npm install -g nodemon

# change to `npm install` in production
RUN npm update


# Expose this port to host, app is running on this port as specified in ./bin/www
EXPOSE 8080

# Run express app as specified in package.json
CMD ["npm", "start"]