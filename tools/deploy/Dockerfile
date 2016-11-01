FROM node:latest

RUN mkdir -p /usr/api
WORKDIR /usr/api

COPY package.json .
RUN npm i --production
COPY build .

EXPOSE 3000

CMD ["node", "main" , "3000", "mongo"]
