import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { components } from 'src/autogen-types';
import { RootState } from 'src/store';

export type StudentDetailType = {
  data: Partial<components['schemas']['GetStudentDto']>;
  isLoading: boolean;
  isEdit: boolean;
};

const initialState: StudentDetailType = {
  data: {},
  isLoading: false,
  isEdit: false,
};

const { actions, reducer } = createSlice({
  name: 'studentDetail',
  initialState,
  reducers: {
    setStudentDetail: (
      state,
      action: PayloadAction<components['schemas']['GetStudentDto']>
    ) => {
      state.data = action.payload;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    setEdit: (state, action: PayloadAction<boolean>) => {
      state.isEdit = action.payload;
    },

    resetStudentDetail: () => initialState,
  },
});

const { setStudentDetail, setLoading, setEdit, resetStudentDetail } = actions;

const studentDetailSelector = (state: RootState) =>
  state.students.studentDetail;

export {
  setStudentDetail,
  setLoading,
  setEdit,
  resetStudentDetail,
  studentDetailSelector,
  reducer as studentDetailReducer,
};
