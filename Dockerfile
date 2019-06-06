# Build stage based on Node.js
FROM node:10.15.3-alpine AS build-stage

# Install ca certificates bundle
RUN apk add --no-cache ca-certificates

# Add zscaler certificate
ARG ZSCALER_CERTIFICATE
RUN echo "$ZSCALER_CERTIFICATE" > /usr/local/share/ca-certificates/zscaler.pem

# Update new cert
RUN update-ca-certificates --fresh

# Add extra certificates to Node.js
ENV NODE_EXTRA_CA_CERTS /usr/local/share/ca-certificates/zscaler.pem

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . ./

# Lint, test and build app
RUN npm run lint && \
    npm run build



# Production stage based on Nginx
FROM nginx:1.15.12-alpine

# Copy build artifact
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html

# Copy nginx conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
