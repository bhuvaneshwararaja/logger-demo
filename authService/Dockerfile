FROM node:alpine
WORKDIR /app/authservice/
COPY package.json .
RUN npm install
copy . .
EXPOSE 4000
CMD ["node","server.js"]