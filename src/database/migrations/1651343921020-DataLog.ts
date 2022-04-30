import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class DataLog1651343921020 implements MigrationInterface {
    public table = new Table({
        name: "data_log",
        columns: [
            {
                name: "id",
                type: "INT",
                isPrimary: true,
            },
            {
                name: "timestamp",
                type: "DATETIME",
            },
            {
                name: "download_speed",
                type: "UNSIGNED BIG INT",
                comment: "In bytes per second",
            },
            {
                name: "upload_speed",
                type: "UNSIGNED BIG INT",
                comment: "In bytes per second",
            },
            {
                name: "server_name",
                type: "VARCHAR(50)",
                comment: "Server name with location",
            },
            {
                name: "latency",
                type: "FLOAT",
            },
        ],
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(this.table, true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable(this.table, true);
    }
}
