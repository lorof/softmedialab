import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Student } from './schemas/student.schema';
import { CreateStudentDto } from './dto/create-student.dto';
import { ModelNames } from './constants/model-names';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(ModelNames.students) private studentsModel: Model<Student>,
  ) {}

  async createStudent(createStudentDto: CreateStudentDto): Promise<Student> {
    const createdStudent = new this.studentsModel(createStudentDto);
    return createdStudent.save();
  }

  async findAllStudents(): Promise<Student[]> {
    return this.studentsModel.find().sort({ createdAt: '-1' });
  }

  async getStudent(studentId: string): Promise<Student | null> {
    return await this.studentsModel.findOne({ studentId });
  }

  async updateStudent(
    studentId: string,
    updateStudentDto: Partial<UpdateStudentDto>,
  ): Promise<void> {
    await this.studentsModel.findOneAndUpdate({ studentId }, updateStudentDto);
  }

  async deleteStudent(studentId: string): Promise<void> {
    await this.studentsModel.findOneAndRemove({ studentId });
  }
}
