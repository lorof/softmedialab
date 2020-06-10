import React from 'react';
import { Helmet } from 'react-helmet-async';

import { useStyles } from './main-layout.styles';
import { SideMenu } from './common';
import { Header } from './common';
import { Content } from './common';

export type MainLayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const classes = useStyles();
  const [isOpen, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      <div className={classes.root}>
        <Header isOpen={isOpen} handleDrawerToggle={handleDrawerToggle} />
        <SideMenu isOpen={isOpen} handleDrawerToggle={handleDrawerToggle} />
        <Content isOpen={isOpen}>{props.children}</Content>
      </div>
    </>
  );
};
