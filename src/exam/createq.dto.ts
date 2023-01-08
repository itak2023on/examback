import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateqDTO {
 @IsNotEmpty({message: 'utga oruulna uu Qtext'})
  Qtext: string;

  @IsNotEmpty({message: 'utga oruulna uu trueNum'})
  trueNum: number;

  @IsNotEmpty({message: 'utga oruulna uu isMulti'})
  isMulti: string;
}



