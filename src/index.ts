import "./setup";

import { Speedtest } from "./speedtest";
import { DataLog } from "./database/entities/DataLog";
import { AppDataSource } from "./config/typeorm";

const DataLogRepo = AppDataSource.getRepository(DataLog);

Speedtest.makeTest()
    .then(async ({ download, upload, timestamp, server, ping }) => {
        await DataLogRepo.insert({
            download_speed: download.bandwidth,
            upload_speed: upload.bandwidth,
            timestamp: new Date(timestamp),
            server_name: `${server.name}, ${server.location}`,
            latency: ping.latency,
        });
    })
    .catch(console.error);
