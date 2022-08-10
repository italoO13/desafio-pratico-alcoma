FROM node:16

WORKDIR /srv/desafio
COPY package*.json .
RUN npm install