import "reflect-metadata";

import { DataSource } from "typeorm";
import { DataLog } from "../database/entities/DataLog";
import { DataLog1651343921020 } from "../database/migrations/1651343921020-DataLog";
import { SQLITE_DATABASE_PATH } from "./environment";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: SQLITE_DATABASE_PATH,
    entities: [DataLog],
    migrations: [DataLog1651343921020],
    migrationsRun: true,
    logging: true,
    synchronize: true,
});

AppDataSource.initialize().catch(console.error);
