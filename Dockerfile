FROM node

ENV NODE_ENV=production

ENV PORT=8080

WORKDIR /build/

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD [ "node", "index.js" ]

EXPOSE 8080