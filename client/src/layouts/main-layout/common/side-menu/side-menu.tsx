import React, { useCallback } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import { useStyles } from './side-menu.styles';

export type SideMenuProps = {
  isOpen: boolean;
  handleDrawerToggle: () => void;
};

export const SideMenu: React.FC<SideMenuProps> = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChangeRoute = useCallback(() => {
    dispatch(push('/students'));
  }, [dispatch]);

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={props.isOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={props.handleDrawerToggle}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {['Студенты'].map((text) => (
          <ListItem onClick={handleChangeRoute} button key={text}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
