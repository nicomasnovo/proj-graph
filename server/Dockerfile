FROM node:16-slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY ./package.json ./
COPY ./package-lock.json ./

ADD . .

RUN npm install
ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 4000

CMD [ "npm", "run", "start" ]
