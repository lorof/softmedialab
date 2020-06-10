import { Document, Schema, model } from 'mongoose';
import { ModelNames } from '../constants/model-names';
import { v4 } from 'uuid';
import { GraduateLevels } from '../constants/graduate-levels';

export interface Student extends Document {
  fullName: string;

  progress: string;

  birthday: Date;

  updatedAt: Date;

  createdAt: Date;
}

export const StudentSchema = new Schema(
  {
    studentId: {
      type: String,
      index: true,
      unique: true,
      default: v4,
    },

    fullName: {
      type: String,
      index: true,
    },

    progress: {
      type: String,
      index: true,
      enum: Object.values(GraduateLevels),
    },

    birthday: {
      type: Date,
      index: true,
    },
  },

  { timestamps: true, versionKey: false },
);

export const StudentModel = model<Student>(ModelNames.students, StudentSchema);
