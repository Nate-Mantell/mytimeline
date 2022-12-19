import { IsOptional, IsString } from "class-validator";

export class CreateTimelineDto {
    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    description: string;
    
    @IsString()
    ownerUid: string;
}
