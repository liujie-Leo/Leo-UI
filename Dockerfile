FROM nginx
LABEL name="Leo-UI"
LABEL version="1.0"
COPY ./dist-ui /usr/share/nginx/html
COPY ./Leo-UI.conf /etc/nginx/conf.d
EXPOSE 80
