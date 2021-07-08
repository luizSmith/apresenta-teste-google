FROM node:10-alpine

# Workspace
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy Files
COPY . .

# Install Dependences
RUN npm install
RUN npm install typescript -g

# Build Project
RUN npm run build

# Exposed
EXPOSE 8080

# Run Project
CMD [ "node", "./dist/app.js" ]
