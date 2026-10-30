FROM node:18

ENV MONGO_DB_USERNAME=root
ENV MONGO_DB_PASSWORD=root123

WORKDIR /application/nodeapp
COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "app.js"]