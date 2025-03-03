# Use the official image as a parent image
FROM node:22.11-alpine

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy all code, except for what's in the .dockerignore file
COPY . .

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]