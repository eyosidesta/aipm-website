FROM node:18.9.0-alpine3.16
WORKDIR /app
RUN npm install -g serve
COPY . .
EXPOSE 80
CMD ["serve", "build", "-p", "80"]
