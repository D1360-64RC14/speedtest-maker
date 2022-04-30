import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DataLog {
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column({
        nullable: false,
        type: "datetime",
    })
    timestamp: Date;

    @Column({
        nullable: false,
        type: "unsigned big int",
    })
    download_speed: number;

    @Column({
        nullable: false,
        type: "unsigned big int",
    })
    upload_speed: number;

    @Column({
        nullable: true,
        type: "varchar",
        length: 50,
    })
    server_name: string;

    @Column({
        nullable: false,
        type: "float",
    })
    latency: number;

    constructor(
        download_speed: number,
        upload_speed: number,
        latency: number,
        timestamp: Date,
        server_name: string,
    ) {
        this.download_speed = download_speed;
        this.upload_speed = upload_speed;
        this.latency = latency;
        this.timestamp = timestamp;
        this.server_name = server_name;
    }
}
