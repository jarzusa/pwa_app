FROM node:18-alpine

WORKDIR /var/www/html/

ENV PATH /var/www/html/node_modules/.bin:$PATH

# COPY package.json /var/www/html/vue3/package.json # not needed here an pnpm install runs in docker-compose command

# install bash and switch current shell to bash
RUN apk update
RUN apk add bash
RUN bash --version
RUN bash

# install pnpm globally
RUN npm install -g pnpm

# EXPOSE and CMD are taken care off in docker-compose (see port: and command: sections in vue service
# EXPOSE 3000 
# CMD ["npm", "run", "dev"]