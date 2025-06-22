import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/users/entities/user.entity";


@Entity('messages')
export class Message {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    content: string;

    @Column('text')
    response: string;

    @Column({ name: 'is_triggered', default: false })
    isTriggered: boolean;

    @ManyToOne(() => User, (user) => user.messages)
    user: User;

}
