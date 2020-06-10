import React from 'react';
import clsx from 'clsx';

import { useStyles } from './content.styles';

export type ContentProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

export const Content: React.FC<ContentProps> = (props) => {
  const classes = useStyles();

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: props.isOpen,
      })}
    >
      <div className={classes.drawerHeader} />
      {props.children}
    </main>
  );
};
