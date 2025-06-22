import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Message } from "src/message/entities/message.entity";
import { UserChannel } from "src/enums";


@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column({
        type: 'enum',
        enum: UserChannel,
        default: UserChannel.WEB
    })
    channel: UserChannel;

    @OneToMany(() => Message, (message) => message.user)
    messages: Message[];

}
