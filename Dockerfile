FROM node:11
WORKDIR /dlp_institutional

COPY package.json package-lock.json ./

# Add the two entries below
# RUN apk --no-cache add curl
RUN mkdir -p node_modules/node-sass/linux-x64-72
RUN curl -L https://github.com/sass/node-sass/releases/download/v6.0.1/linux-x64-72_binding.node -o node_modules/node-sass/linux-x64-72/binding.node

# RUN npm install 
RUN npm install --no-package-lock
RUN npm install react-scripts@3.4.1 -g 

COPY . ./
# EXPOSE 3000
# CMD ["npm", "start"]

# lets build the application
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]