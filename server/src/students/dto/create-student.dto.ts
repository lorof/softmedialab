import { PickType } from '@nestjs/swagger';
import { GetStudentDto } from './get-student.dto';

export class CreateStudentDto extends PickType(GetStudentDto, [
  'fullName',
  'birthday',
  'progress',
] as const) {}
