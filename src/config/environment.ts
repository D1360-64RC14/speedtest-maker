import process from "node:process";

export const SQLITE_DATABASE_PATH =
    process.env.SQLITE_DATABASE_PATH || "./database.sqlite";
export const SPEEDTEST_BIN_FILEPATH =
    process.env.SPEEDTEST_BIN_FILEPATH || "./speedtest";
