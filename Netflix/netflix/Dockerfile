FROM node:lts-bullseye
ENV NODE_ENV=production
ENV TZ="America/Sao_Paulo"
USER root 
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY ["package.json", "./"]
COPY . .
COPY --chown=node:node . .
RUN apt-get update
RUN npm install
RUN apt-get upgrade -y
RUN npm install -g pnpm
RUN pnpm install
EXPOSE 5173
USER node
CMD ["npm", "start"]
     