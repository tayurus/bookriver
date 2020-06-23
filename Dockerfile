FROM node:latest

WORKDIR /src
COPY . /src

# Install dependencies
RUN yarn install
RUN yarn build