
FROM node:slim

ENV NODE_ENV=production
ENV PORT=3001
ENV TINI_VERSION v0.19.0

ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini

RUN chmod +x /tini

ENTRYPOINT ["/tini", "--"]

EXPOSE 3001

RUN mkdir /app && chown -R node:node /app

WORKDIR /app

USER node

COPY --chown=node:node package.json package-lock*.json ./

RUN npm install && npm cache clean --force

COPY --chown=node:node . .

RUN npm i --save-dev @types/swagger-ui-express @types/swagger-jsdoc

RUN npm run build

CMD ["node", "./build/index.js"]