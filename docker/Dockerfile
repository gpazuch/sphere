# Stage 0, based on orb-ui-module, to build and compile Angular
FROM node:16.16.0 as node

WORKDIR /app
COPY package.json /app/
RUN npm install

RUN npm run build:prod

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.13-alpine
COPY --from=built-module /app/dist/ /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
