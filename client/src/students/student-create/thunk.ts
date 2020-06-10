import { ThunkAction, AnyAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';

import { AppDispatch } from 'src/store';
import {
  pushDangerNotification,
  pushSuccessNotification,
} from 'src/notifications';
import { studentCreateApi } from './api';
import { StudentFormValues } from '../common/student-form';

export const createStudent = (
  formData: StudentFormValues
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (
  dispatch: AppDispatch
) => {
  try {
    const data = await studentCreateApi.createStudent(formData);

    dispatch(pushSuccessNotification('Студент успешно создан'));

    dispatch(push(`/students/${data.studentId}`));
  } catch (e) {
    dispatch(pushDangerNotification(e.message));
  }
};
