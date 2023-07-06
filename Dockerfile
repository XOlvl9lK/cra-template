FROM node:18.16.0 as build

WORKDIR /app

COPY ./package.json /app/

RUN npm i

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
