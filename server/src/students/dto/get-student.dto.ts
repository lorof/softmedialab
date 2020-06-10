import { ApiProperty } from '@nestjs/swagger';
import { GraduateLevels } from '../constants/graduate-levels';

export class GetStudentDto {
  @ApiProperty()
  studentId: string;

  @ApiProperty()
  fullName: string;

  @ApiProperty({ enum: GraduateLevels })
  progress: GraduateLevels;

  @ApiProperty()
  birthday: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
