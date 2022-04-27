import "reflect-metadata";

import { DataSource } from "typeorm";
import { DataLog } from "../database/entities/DataLog";
import { SQLITE_DATABASE_PATH } from "./environment";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: SQLITE_DATABASE_PATH,
    entities: [DataLog],
});
