import { IsDate, IsString } from "class-validator";

export class CreateTimelineEventDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsDate()
    dateBegan: Date;

    @IsDate()
    dateEnded: Date;

    @IsString()
    timelineUid: string;
}
