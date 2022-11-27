FROM node:18.12.1

RUN npm install -g npm@9.1.2

RUN mkdir /srv/app && chown node:node /srv/app

USER node

WORKDIR /srv/app
