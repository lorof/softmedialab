import React, { useEffect, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

import { studentDetailSelector, resetStudentDetail, setEdit } from './slice';
import { getStudentDetail, updateStudent } from './thunk';
import { StudentCardDetail } from '../common/student-card-detail';
import { StudentForm, StudentFormValues } from '../common/student-form';
import { push } from 'connected-react-router';

export type StudentDetailProps = {};

export const StudentDetail: React.SFC<StudentDetailProps> = () => {
  const params = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const student = useSelector(studentDetailSelector);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getStudentDetail(params.id));

    return () => {
      dispatch(resetStudentDetail());
    };
  }, [dispatch, params.id]);

  const handleEditStudent = useCallback(
    async (formValues: StudentFormValues) => {
      setLoading(true);

      await dispatch(updateStudent(params.id, formValues));

      setLoading(false);
    },
    [dispatch, params.id]
  );

  const handleChangeRoute = useCallback(() => {
    dispatch(push('/students'));
  }, [dispatch]);

  const handleCancel = useCallback(() => {
    dispatch(setEdit(false));
  }, [dispatch]);

  return (
    <>
      <Button onClick={handleChangeRoute}>Назад</Button>
      {student.isEdit ? (
        <StudentForm
          handleSubmit={handleEditStudent}
          handleCancel={handleCancel}
          isLoading={isLoading}
          {...student.data}
        />
      ) : (
        <StudentCardDetail isLoading={student.isLoading} {...student.data} />
      )}
    </>
  );
};
