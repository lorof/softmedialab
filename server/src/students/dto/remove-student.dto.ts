import { PickType } from '@nestjs/swagger';
import { GetStudentDto } from './get-student.dto';

export class RemoveStudentDto extends PickType(GetStudentDto, [
  'studentId',
] as const) {}
