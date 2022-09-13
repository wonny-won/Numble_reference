FROM node:16

WORKDIR /cyworld_meontos/
COPY . /cyworld_meontos/

RUN yarn install
RUN yarn build
CMD yarn start