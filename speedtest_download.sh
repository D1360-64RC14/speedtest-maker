#!/bin/bash

VERSION=1.1.1
ARCH=x86_64

TEMP_DIR=$(mktemp -d)
FILENAME=ookla-speedtest-$VERSION-linux-$ARCH.tgz
URL=https://install.speedtest.net/app/cli/$FILENAME

OUTPUT_FILEPATH="speedtest"

if [ $SPEEDTEST_BIN_FILEPATH ]; then
    OUTPUT_FILEPATH=$SPEEDTEST_BIN_FILEPATH
fi

wget $URL -O $TEMP_DIR/$FILENAME
tar -xf $TEMP_DIR/$FILENAME -C $TEMP_DIR
mv $TEMP_DIR/speedtest ./$OUTPUT_FILEPATH

rm -rf $TEMP_DIR