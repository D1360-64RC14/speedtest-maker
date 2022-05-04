FROM node:16.15-alpine

WORKDIR /usr/local/src/speedtest_maker

COPY . .

RUN mkdir -p /usr/local/src/speedtest_maker/database \
    && yarn \
    && yarn prod:build

RUN if [ ! -f "$SPEEDTEST_BIN_FILEPATH" ]; then \
        apk add --no-cache --virtual .download-deps wget tar bash \
        && ./speedtest_download.sh \
        && apk del .download-deps \
    fi

CMD [ "node", "build/index.js" ]