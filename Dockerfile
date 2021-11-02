FROM node:14-alpine
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# add app
COPY . ./

EXPOSE 3000

# start app
CMD ["npm", "start"]