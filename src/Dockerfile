FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY /nginx/default.conf /etc/nginx/conf.d/default.conf

COPY . /usr/share/nginx/html/src

RUN mv /usr/share/nginx/html/src/portifolio.html /usr/share/nginx/html/

EXPOSE 17

CMD ["nginx", "-g", "daemon off;"]