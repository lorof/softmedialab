import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { components } from 'src/autogen-types';
import { RootState } from 'src/store';

export type StudentListType = {
  data: components['schemas']['GetStudentDto'][];
  isLoading: boolean;
};

const initialState: StudentListType = {
  data: [],
  isLoading: false,
};

const { actions, reducer } = createSlice({
  name: 'studentList',
  initialState,
  reducers: {
    setStudentList: (
      state,
      action: PayloadAction<components['schemas']['GetStudentDto'][]>
    ) => {
      state.data.push(...action.payload);
    },

    setRemoveStudent: (state, action: PayloadAction<string | undefined>) => {
      const studentData = state.data.filter(
        ({ studentId }) => studentId !== action.payload
      );

      state.data = studentData;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    resetStudentList: () => initialState,
  },
});

const {
  setStudentList,
  setRemoveStudent,
  setLoading,
  resetStudentList,
} = actions;

const studentListSelector = (state: RootState) => state.students.studentList;

export {
  setStudentList,
  setRemoveStudent,
  setLoading,
  resetStudentList,
  studentListSelector,
  reducer as studentListReducer,
};
