#!/bin/bash

VERSION=1.1.1
ARCH=x86_64

TEMP_DIR=$(mktemp -d)
FILENAME=ookla-speedtest-$VERSION-linux-$ARCH.tgz
LINK=https://install.speedtest.net/app/cli/$FILENAME

wget $LINK -O $TEMP_DIR/$FILENAME
tar -xf $TEMP_DIR/$FILENAME -C $TEMP_DIR
mv $TEMP_DIR/speedtest .

rm -rf $TEMP_DIR