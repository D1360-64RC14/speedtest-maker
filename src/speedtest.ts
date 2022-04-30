import { SpeedtestResult } from "./types";
import { promisify } from "node:util";
import { execFile as execFileCallback } from "node:child_process";
import { SPEEDTEST_BIN_FILEPATH } from "./config/environment";

const execFile = promisify(execFileCallback);

export class Speedtest {
    public static makeTest() {
        return new Promise<SpeedtestResult>((ok, bad) => {
            const child = execFile(SPEEDTEST_BIN_FILEPATH, [
                "--format=json",
                "--accept-license",
                "--accept-gdpr",
            ]);

            child.then(({ stdout }) =>
                ok(JSON.parse(stdout) as SpeedtestResult),
            );

            child.catch((err) =>
                bad({ exitCode: child.child.exitCode, error: err }),
            );
        });
    }
}
