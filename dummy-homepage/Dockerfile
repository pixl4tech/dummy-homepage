FROM node:latest as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install -g @vue/cli -g
RUN npm install ant-design-vue --save
RUN npm install --save @ant-design/icons-vue
COPY . /app
RUN npm run build

# production environment
FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 90
CMD ["nginx", "-g", "daemon off;"]
