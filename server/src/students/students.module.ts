import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { StudentSchema } from './schemas/student.schema';
import { ModelNames } from './constants/model-names';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: ModelNames.students, schema: StudentSchema }],
      'mongo',
    ),
  ],
  providers: [StudentsService],
  controllers: [StudentsController],
})
export class StudentsModule {}
