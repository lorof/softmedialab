import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';

import { App } from 'src/app';
import { theme } from 'src/theme';
import { store } from 'src/store';

ReactDOM.render(
  <HelmetProvider>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <SnackbarProvider maxSnack={5}>
          <CssBaseline />
          <App />
        </SnackbarProvider>
      </Provider>
    </MuiThemeProvider>
  </HelmetProvider>,
  document.getElementById('root')
);
