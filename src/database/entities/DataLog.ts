import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DataLog {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        nullable: false,
    })
    record_time!: Date;

    @Column({
        nullable: false,
    })
    download_speed_bits!: number;

    @Column({
        nullable: false,
    })
    upload_speed_bits!: number;

    @Column({
        nullable: true,
        length: 30,
    })
    server_name!: string;
}
