FROM node:16

WORKDIR /usr/app/pmrn_mapa
#COPY package.json .
#RUN npm install --quiet
COPY . .

EXPOSE 3000
