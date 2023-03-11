FROM node:14.19.1-alpine3.14 AS local

WORKDIR /usr/src/app

COPY package.json ./
COPY .npmrc .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:dev"]