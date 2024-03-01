FROM node:18
ARG base_dir=/var
ENV BASE_DIR=/out
WORKDIR ${base_dir}
COPY package.json index.js .
CMD ["node", "./index.js"]
