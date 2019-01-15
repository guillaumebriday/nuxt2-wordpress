FROM node:11-alpine

LABEL maintainer="guillaumebriday@gmail.com"
LABEL traefik.enable="true"
LABEL traefik.port="3000"

# Set environment variables
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    API_URL="https://wordpress-api.guillaumebriday.xyz/wp-json"

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

# Bundle app source
COPY . .

# Build Nuxt app
RUN yarn build:modern -q

# Expose the app's port
EXPOSE 3000

CMD [ "yarn", "start:modern" ]
