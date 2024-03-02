# FROM alpine:latest

# # configure the environment log file

# ENV LOG_DIR=/var/log/my-log
# ENV MAX_LOG_SIZE=1G
# ENV MAX_LOG_FILES=5

# # docker image build -t my-alpine .

FROM node:latest
RUN npm install -g nodemon
WORKDIR /app
COPY . .
RUN npm install
RUN npm install express
CMD [ "nodemon"]


# docker image build -t node_app .
# docker container run --rm -it --name node -p 3000:3000 node_app