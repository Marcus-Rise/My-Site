ARG NODE_VERSION=14

FROM node:${NODE_VERSION} AS dev
WORKDIR /app
USER node

CMD npm i --quiet \
    && npx next telemetry --disable \
    && npm run dev

FROM node:${NODE_VERSION}-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY ./pages ./pages
COPY ./public ./public
COPY ./src ./src
COPY ./*.js* ./
COPY ./*.ts* ./

RUN npm run build
RUN npm run export
RUN find out -type f -regex '.*\.\(htm\|html\|txt\|text\|js\|css\)$' -exec gzip -f -k {} \;

FROM scratch AS artifacts

COPY --from=build /app/out /
