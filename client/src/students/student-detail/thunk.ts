import { push } from 'connected-react-router';
import { ThunkAction, AnyAction } from '@reduxjs/toolkit';

import { RootState } from 'src/store';
import {
  pushDangerNotification,
  pushSuccessNotification,
} from 'src/notifications';
import { studentDetailApi } from './api';
import { setStudentDetail, setLoading, setEdit } from './slice';
import { StudentFormValues } from '../common/student-form';

export const getStudentDetail = (
  studentId: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const studentDetail = await studentDetailApi.getStudentDetail(studentId);

    dispatch(setStudentDetail(studentDetail));
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
    await studentDetailApi.removeStudent(studentId);

    dispatch(push('/students'));

    dispatch(pushSuccessNotification('Студент успешно удален'));
  } catch (e) {
    dispatch(pushDangerNotification(e.message));
  }
};

export const updateStudent = (
  studentId: string,
  formValues: StudentFormValues
): ThunkAction<Promise<void>, RootState, {}, AnyAction> => async (
  dispatch,
  getState
) => {
  const studentData = getState().students.studentDetail.data;

  try {
    await studentDetailApi.updateStudent(studentId, formValues);

    dispatch(
      setStudentDetail({
        studentId,
        fullName: formValues.fullName ?? '',
        birthday: formValues.birthday ?? '',
        progress: formValues.progress ?? 'Excellent',
        createdAt: studentData.createdAt ?? '',
        updatedAt: studentData.updatedAt ?? '',
      })
    );

    dispatch(setEdit(false));
  } catch (e) {
    dispatch(pushDangerNotification(e.message));
  }
};
