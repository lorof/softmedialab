import React, { useCallback } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { components } from 'src/autogen-types';
import Skeleton from '@material-ui/lab/Skeleton';

import { dates } from 'src/common/dates';
import { useDispatch } from 'react-redux';
import { deleteStudent } from '../../student-detail/thunk';
import { setEdit } from '../../student-detail/slice';
import { GraduateLevels } from 'src/constants';

export type StudentCardDetailProps = {
  isLoading: boolean;
} & Partial<components['schemas']['GetStudentDto']>;

export const StudentCardDetail: React.FC<StudentCardDetailProps> = (props) => {
  const dispatch = useDispatch();

  const handleEditStudent = useCallback(() => {
    dispatch(setEdit(true));
  }, [dispatch]);

  const handleRemoveStudent = useCallback(() => {
    if (!props.studentId) return;

    dispatch(deleteStudent(props.studentId));
  }, [dispatch, props.studentId]);

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.isLoading ? <Skeleton /> : props.fullName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.isLoading ? <Skeleton /> : dates.parse(props.birthday)}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.isLoading ? (
            <Skeleton />
          ) : (
            props.progress && GraduateLevels[props.progress]
          )}
        </Typography>
      </CardContent>
      {!props.isLoading && (
        <CardActions>
          <Button onClick={handleEditStudent} size="small" color="secondary">
            Изменить
          </Button>
          <Button onClick={handleRemoveStudent} size="small" color="secondary">
            Удалить
          </Button>
        </CardActions>
      )}
    </Card>
  );
};
