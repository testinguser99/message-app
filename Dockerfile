# Define from what image we want to build from
FROM node:8.12

# Create app directory to hold the application code inside the image, 
# this will be the working directory for the application
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
ADD package*.json ./

# Include only production dependencies
RUN npm install --production

# Bundle app source
ADD src/ /usr/src/app/src/

# App binding port
EXPOSE 8080

# Command to run the app
CMD [ "npm", "start" ]
