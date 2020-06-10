import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { getStudentList } from './thunk';
import { resetStudentList, studentListSelector } from './slice';
import { useStyles } from './student-list.styles';
import { StudentCard } from '../common/student-card';
import { push } from 'connected-react-router';

export type StudentListProps = {};

export const StudentList: React.SFC<StudentListProps> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const students = useSelector(studentListSelector);

  useEffect(() => {
    dispatch(getStudentList());

    return () => {
      dispatch(resetStudentList());
    };
  }, [dispatch]);

  const handleChangeRoute = useCallback(() => {
    dispatch(push('students/create'));
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button onClick={handleChangeRoute}>Добавить студента</Button>
        </Grid>
        {!students.data.length && !students.isLoading && (
          <Typography variant="body1">
            Пока не было добавлено стундентов
          </Typography>
        )}
        {(students.isLoading ? [...Array(9)] : students.data).map(
          (student, key) => (
            <Grid key={key} item xs={12} md={3}>
              <StudentCard
                isLoading={students.isLoading}
                {...(typeof student !== 'number' ? student : {})}
              />
            </Grid>
          )
        )}
      </Grid>
    </div>
  );
};
