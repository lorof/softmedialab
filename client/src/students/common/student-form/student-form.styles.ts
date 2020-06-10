import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1),
    },
    field: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    form: {
      maxWidth: '500px',
      margin: theme.spacing(2),
    },
  })
);
