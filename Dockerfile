FROM node:16-alpine
WORKDIR /app

# Set build arguments
ARG REACT_APP_SERVER_IP="127.0.0.1"
ARG REACT_APP_SERVER_PORT="5000"
ARG REACT_APP_ADMIN_NICKNAME="admin"
ARG REACT_APP_ADMIN_PW="admin"

# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
# NOTE: blockly requires the `public/media` directory to exist, hence the mkdir command
COPY package.json package-lock.json ./
RUN mkdir -p public/media && npm ci

# Copy source code and build the app
COPY . .
RUN npm run build

# Setup environment
ENV NODE_ENV production

# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000

# Start the app
CMD [ "npx", "serve", "build" ]
