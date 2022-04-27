import process from "node:process";

const MANDATORY_ENV_VARS: string[] = [];

for (const ENV_VAR in MANDATORY_ENV_VARS) {
    if (!(ENV_VAR in process.env)) {
        throw TypeError(`Environment variable ${ENV_VAR} is mandatory.`);
    }
}

// export const SQLITE_DATABASE_NAME = process.env.SQLITE_DATABASE_NAME!;

export const SQLITE_DATABASE_PATH =
    process.env.SQLITE_DATABASE_PATH || "./database.sqlite";
export const SPEEDTEST_BIN_FILE =
    process.env.SPEEDTEST_BIN_FILE || "./speedtest";
