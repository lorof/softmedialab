import 'date-fns';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { useFormik } from 'formik';
import { Button } from '@material-ui/core';
import ru from 'date-fns/locale/ru';

import { GraduateLevels } from 'src/constants';
import { components } from 'src/autogen-types';
import { useStyles } from './student-form.styles';

export type StudentFormValues =
  | components['schemas']['CreateStudentDto']
  | components['schemas']['UpdateStudentDto'];

export type StudentFormProps = {
  handleSubmit: (data: StudentFormValues) => Promise<void>;
  isLoading: boolean;
  handleCancel?: () => void;
} & StudentFormValues;

export const StudentForm: React.SFC<StudentFormProps> = (props) => {
  const classes = useStyles();

  const formik = useFormik<StudentFormValues>({
    initialValues: {
      fullName: props.fullName ?? '',
      progress: props.progress ?? 'Excellent',
      birthday: props.birthday ?? new Date().toISOString(),
    },
    validate: (values: StudentFormValues) => {
      const errors: Partial<StudentFormValues> = {};

      if (!values.fullName) {
        errors.fullName = 'Обязательное поле';
      }

      return errors;
    },
    onSubmit: async (data, { resetForm }) => {
      await props.handleSubmit(data);

      resetForm();
    },
  });

  return (
    <Paper className={classes.root}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <FormControl className={classes.field}>
          <TextField
            disabled={props.isLoading}
            error={Boolean(formik.errors.fullName)}
            label="Полное имя"
            helperText={formik.errors.fullName}
            onChange={({ currentTarget }) =>
              formik.setFieldValue('fullName', currentTarget.value)
            }
            value={formik.values.fullName}
          />
        </FormControl>
        <FormControl className={classes.field}>
          <InputLabel id="progress-label">Успеваемость</InputLabel>
          <Select
            labelId="progress-label"
            disabled={props.isLoading}
            error={Boolean(formik.errors.progress)}
            onChange={({ target }) =>
              formik.setFieldValue('progress', target.value)
            }
            value={formik.values.progress}
          >
            {Object.entries(GraduateLevels).map(([value, label]) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
          {Boolean(formik.errors.progress) && (
            <FormHelperText>{formik.errors.progress}</FormHelperText>
          )}
        </FormControl>
        <FormControl className={classes.field}>
          <MuiPickersUtilsProvider locale={ru} utils={DateFnsUtils}>
            <DatePicker
              animateYearScrolling
              variant="inline"
              disabled={props.isLoading}
              error={Boolean(formik.errors.birthday)}
              format="dd.MM.yyyy"
              label="Дата рождения"
              onChange={(date) =>
                formik.setFieldValue('birthday', date?.toISOString())
              }
              value={formik.values.birthday}
            />
          </MuiPickersUtilsProvider>
        </FormControl>
        <FormControl className={classes.field}>
          <Button disabled={props.isLoading} type="submit">
            Отправить
          </Button>
          {props.handleCancel && (
            <Button
              onClick={props.handleCancel}
              disabled={props.isLoading}
              color="secondary"
            >
              Отменить
            </Button>
          )}
        </FormControl>
      </form>
    </Paper>
  );
};
