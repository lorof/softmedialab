import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

import { StudentsService } from './students.service';
import { Student } from './schemas/student.schema';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { GetStudentDto } from './dto/get-student.dto';

@ApiTags('students')
@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Get()
  @ApiResponse({
    status: 200,
    type: GetStudentDto,
  })
  findAllStudents(): Promise<Student[]> {
    return this.studentsService.findAllStudents();
  }

  @Get(':studentId')
  @ApiResponse({
    status: 200,
    type: GetStudentDto,
  })
  getStudent(@Param('studentId') studentId: string): Promise<Student | null> {
    return this.studentsService.getStudent(studentId);
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The student has been successfully created.',
    type: GetStudentDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  createStudent(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentsService.createStudent(createStudentDto);
  }

  @Put(':studentId')
  @ApiResponse({
    status: 200,
  })
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() updateStudentDto: Partial<UpdateStudentDto>,
  ): Promise<void> {
    this.studentsService.updateStudent(studentId, updateStudentDto);

    return;
  }

  @Delete(':studentId')
  deleteStudent(@Param('studentId') studentId: string): Promise<void> {
    this.studentsService.deleteStudent(studentId);

    return;
  }
}
