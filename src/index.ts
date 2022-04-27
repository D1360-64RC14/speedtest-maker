import { spawn } from "node:child_process";
import { SPEEDTEST_BIN_FILE } from "./config/environment";

import "./config/typeorm";

const proc = spawn(SPEEDTEST_BIN_FILE, [
    "--format=json",
    "--unit=bps",
    "--accept-license",
    "--accept-gdpr",
]);

proc.stdout.on("data", (msg) => console.log(msg.toString()));
proc.stderr.on("data", (msg) => console.error(msg.toString()));
