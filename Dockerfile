FROM node:12.14-alpine3.10

WORKDIR /app
COPY package.json /app/
COPY yarn.lock /app/

RUN yarn install --frozen-lockfile --non-interactive

COPY tsconfig.json /app
COPY src /app/src

RUN yarn build

ENTRYPOINT yarn start