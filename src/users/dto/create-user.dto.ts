import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { UserChannel } from "src/enums";

export class CreateUserDto {


    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsEnum(UserChannel)
    channel: UserChannel;

}
