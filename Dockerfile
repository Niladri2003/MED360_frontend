#FROM node:15.4 as build
#
#WORKDIR /app
#
#COPY package*.json .
#RUN npm install
#COPY . .
#RUN npm run build
#FROM nginx:1.19
#COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
#COPY --from=build /app/build /usr/share/nginx/html
#


# Stage 1: Build the React app
FROM node:14-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Use Nginx to serve the built React app
FROM nginx:alpine

# Copy the built app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port Nginx will listen on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
