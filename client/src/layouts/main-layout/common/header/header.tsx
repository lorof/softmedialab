import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import { useStyles } from './header.styles';

export type HeaderProps = {
  isOpen: boolean;
  handleDrawerToggle: () => void;
};

export const Header: React.FC<HeaderProps> = (props) => {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: props.isOpen,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleDrawerToggle}
          edge="start"
          className={clsx(classes.menuButton, props.isOpen && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Softmedialab</Typography>
      </Toolbar>
    </AppBar>
  );
};
