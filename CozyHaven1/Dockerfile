# Use the latest LTS version of Node.js
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
#RUN npm install react-router-dom --save

# Copy the rest of your application files
COPY . .

# Expose the port your app runs on
EXPOSE 5173

# Define the command to run your app
CMD ["npm", "run", "dev"]