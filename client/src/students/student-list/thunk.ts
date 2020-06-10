import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { pushDangerNotification } from 'src/notifications';
import { studentListApi } from './api';
import { setStudentList, setLoading, setRemoveStudent } from './slice';

export const getStudentList = (): ThunkAction<
  Promise<void>,
  {},
  {},
  AnyAction
> => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const studentList = await studentListApi.getStudentList();

    dispatch(setStudentList(studentList));
  } catch (e) {
    dispatch(pushDangerNotification(e.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const deleteStudent = (
  studentId: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (dispatch) => {
  try {
    await studentListApi.removeStudent(studentId);

    dispatch(setRemoveStudent(studentId));
  } catch (e) {
    dispatch(pushDangerNotification(e.message));
  }
};
