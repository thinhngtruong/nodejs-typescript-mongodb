FROM node:14

WORKDIR /app

COPY package.json package.json  
COPY package-lock.json package-lock.json

RUN npm install

COPY dist .  
RUN npm run build

CMD ["node", "server.js"]