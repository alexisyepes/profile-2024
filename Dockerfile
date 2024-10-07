# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the Next.js project
RUN npm run build

# Expose the port that Next.js will run on
EXPOSE 3000

# Start the Next.js server in production mode
CMD ["npm", "start"]
