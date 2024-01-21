import { IsEnum, IsNumber, IsOptional } from 'class-validator';

export class UserbooksDto {
  @IsEnum(['to-be-read', 'currently-reading'])
  status: string;

  @IsNumber({}, { each: true })
  @IsOptional()
  rating?: number;
}
