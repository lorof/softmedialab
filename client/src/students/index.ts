import { combineReducers } from '@reduxjs/toolkit';

import {
  studentListReducer,
  StudentList,
  StudentListType,
} from './student-list';
import {
  StudentDetail,
  StudentDetailType,
  studentDetailReducer,
} from './student-detail';
import { StudentCreate } from './student-create';

export type Students = {
  studentList: StudentListType;
  studentDetail: StudentDetailType;
};

const students = combineReducers<Students>({
  studentList: studentListReducer,
  studentDetail: studentDetailReducer,
});

export { students, StudentList, StudentCreate, StudentDetail };
