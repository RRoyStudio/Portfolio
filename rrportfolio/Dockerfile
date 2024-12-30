# Use a Node.js base image
FROM node:22-alpine AS base

# Set the working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build



# Set the working directory
WORKDIR /app/


# Expose the port the app will run on
EXPOSE 3000

# Start the Next.js application in production mode
CMD ["npm", "run", "start"]