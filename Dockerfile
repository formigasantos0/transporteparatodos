FROM nginx:alpine

COPY index.html /usr/share/nginx/html/index.html
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js
COPY img /usr/share/nginx/html/img
COPY fonts /usr/share/nginx/html/fonts
COPY docs /usr/share/nginx/html/docs
COPY .well-known /usr/share/nginx/html/.well-known

EXPOSE 80