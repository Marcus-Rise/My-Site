FROM node:14 AS base

WORKDIR /app

FROM base AS node_modules

COPY package*.json ./

RUN npm ci

FROM node_modules AS build

COPY ./ .

RUN npm run build
RUN npm run export
RUN find out -type f -regex '.*\.\(htm\|html\|txt\|text\|js\|css\)$' -exec gzip -f -k {} \;

FROM scratch AS artifacts

COPY --from=build /app/out /
