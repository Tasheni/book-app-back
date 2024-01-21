import { IsString, IsNumber, IsOptional, IsUrl, IsArray } from 'class-validator';

export class BookDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly author: string;

  @IsNumber()
  readonly publishedYear: number;

  @IsString()
  readonly isbn: string;

  @IsString()
  readonly description: string;

  @IsUrl()
  readonly coverImageURL: string;

  @IsArray()
  readonly genres: string
  
  @IsString()
  readonly language: string;

  @IsString()
  readonly readStatus: string;

  @IsString()
  readonly userRating: string;

  @IsNumber()
  readonly numberOfPages: number;

  @IsNumber()
  readonly readingTiime: number;

  @IsString()
  readonly tags: string;

  @IsString()
  readonly format: string;

  @IsString()
  readonly dateAdded: string;

  @IsString()
  readonly startDate: string;

  @IsString()
  readonly endDate: string;
}

