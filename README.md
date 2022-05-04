# speedtest-maker

A tool made in Typescript to run network tests automatically and save them to an SQLite database.

## Setup

First, you'll need to create this exact directory path: `/usr/local/src/speedtest_maker/database`. The container will bind a file called *database.sqlite* to this folder to facilitate access to the database. Otherwise, you'll get an error message from docker.

Then, you can first run the container with the command
```
node run prod:compose
```
or instead, if you didn't have node/yarn, you can run directly
```
docker-compose up
```

The container will be named *speedtest_maker*.

A network log is made every time you start the container, so you need to create some way to schedule this event. For personal purposes, I recommend using *[crontab](https://en.wikipedia.org/wiki/Cron)* for this job. But you can use whatever you want.

Here it's an example of the job:
```
0-59/10 * * * *   docker container start speedtest_maker
```

At this point, the container will run every 10 minutes.

## Environment variables

- `SQLITE_DATABASE_PATH`: the path where the database will be stored. It includes the path and the actual file name. If undefined, `database/database.sqlite` will be used as default;
- `SPEEDTEST_BIN_FILEPATH`: the path where the file *speedtest* is located. If undefined, docker will download the file to `./speedtest`.