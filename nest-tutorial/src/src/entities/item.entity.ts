import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Item {
    // AutoIncrement ID
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    todo: string;

    @Column("datetime")
    limit: Date;

    @Column("boolean", {default: false})
    idDone: boolean;

    @Column()
    deletePassword: string;

    @CreateDateColumn()
    // "?"は、null許容
    // readonlyをつけるとINSERT後にアプリからの変更を受け付けない
    readonly createdAt?: Date;

    @UpdateDateColumn()
    readonly updatedAt?: Date;
}