FROM node:12.16.2-alpine AS build
RUN mkdir /opt/build
WORKDIR /opt/build
COPY package*.json ./
RUN npm install
COPY src src
COPY public public
RUN npm run build

FROM nginx:1.17.10-alpine
COPY --from=build /opt/build/build /usr/share/nginx/html
