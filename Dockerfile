# https://dev.to/erezhod/setting-up-a-nestjs-project-with-docker-for-back-end-development-30lg
# Dockerfile

# base image
FROM node:12-alpine

# set working directory
WORKDIR /usr/src

# install global dependencies
RUN npm install -g @nestjs/cli

# copy files to docker directory
COPY . .

# install application dependencies
RUN npm install

# build application
RUN npm run build

EXPOSE 3000


# run application
CMD ["node", "dist/main"]


# # create & set working directory
# RUN mkdir -p /usr/src
# WORKDIR /usr/src

# # copy source files
# COPY . /usr/src

# # install dependencies
# RUN npm i
# RUN npm i --save @types/node
# RUN npm i typescript -g
# RUN npm i ts-node -g

# # start app 
# RUN npm run build

# COPY ./src/infraestructure/swagger/user-interface ./dist/infraestructure/swagger/user-interface

# EXPOSE 8080

# CMD ["npm", "run", "dev"]