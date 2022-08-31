FROM node:alpine
WORKDIR /app/gateway/
COPY package.json .
RUN npm install
copy . .
EXPOSE 3000
CMD ["node","gateway.js"]