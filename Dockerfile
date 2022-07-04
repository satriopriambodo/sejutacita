FROM node:16.15
WORKDIR /app
ENV PORT=5000 
ENV SECRETKEY=rahasia
COPY package.json package-lock.json /app/  
RUN npm install && npm cache clean --force
RUN npm install -g nodemon
COPY ./ ./
CMD ["npm", "run", "start"]
