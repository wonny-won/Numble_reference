FROM node:16

WORKDIR /cyworld_meontos/
COPY . /cyworld_meontos/

RUN yarn insatll
RUN yarn build
CMD yarn start