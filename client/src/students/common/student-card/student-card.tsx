import React, { useCallback } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { components } from 'src/autogen-types';
import Skeleton from '@material-ui/lab/Skeleton';

import { dates } from 'src/common/dates';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { deleteStudent } from '../../student-list/thunk';

export type StudentCardProps = {
  isLoading: boolean;
} & Partial<components['schemas']['GetStudentDto']>;

export const StudentCard: React.FC<StudentCardProps> = (props) => {
  const dispatch = useDispatch();

  const handleChangeRoute = useCallback(() => {
    if (!props.studentId) return;

    dispatch(push(`students/${props.studentId}`));
  }, [dispatch, props.studentId]);

  const handleRemoveStudent = useCallback(() => {
    if (!props.studentId) return;

    dispatch(deleteStudent(props.studentId));
  }, [dispatch, props.studentId]);

  return (
    <Card>
      {props.isLoading ? (
        <Skeleton height={200} variant="rect"></Skeleton>
      ) : (
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="400"
          image="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          title="Contemplative Reptile"
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.isLoading ? <Skeleton /> : props.fullName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.isLoading ? <Skeleton /> : dates.parse(props.birthday)}
        </Typography>
      </CardContent>
      {!props.isLoading && (
        <CardActions>
          <Button onClick={handleChangeRoute} size="small" color="primary">
            Подробнее
          </Button>
          <Button onClick={handleRemoveStudent} size="small" color="secondary">
            Удалить
          </Button>
        </CardActions>
      )}
    </Card>
  );
};
