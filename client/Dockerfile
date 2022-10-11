FROM node:16-slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# COPY entrypoint.sh /entrypoint.sh
# RUN chmod +x /entrypoint.sh

COPY package*.json ./

ADD . .

RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install

EXPOSE 4200

CMD [ "npm", "run", "start" ]
