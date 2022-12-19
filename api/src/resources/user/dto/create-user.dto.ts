import { IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    uid: string;

    @IsString()
    name: string;

    @IsString()
    email: string;
}
