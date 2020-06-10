import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

import { StudentForm, StudentFormValues } from '../common/student-form';
import { createStudent } from './thunk';
import { push } from 'connected-react-router';

export type StudentCreateProps = {};

export const StudentCreate: React.SFC<StudentCreateProps> = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleCreateStudent = useCallback(
    async (data: StudentFormValues) => {
      setLoading(true);

      await dispatch(createStudent(data));

      setLoading(false);
    },
    [dispatch]
  );

  const handleChangeRoute = useCallback(() => {
    dispatch(push('/students'));
  }, [dispatch]);

  return (
    <>
      <Button onClick={handleChangeRoute}>Назад</Button>
      <StudentForm isLoading={isLoading} handleSubmit={handleCreateStudent} />
    </>
  );
};
