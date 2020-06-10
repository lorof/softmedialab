import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';

import { modalsReducer } from 'src/modal-dialogs/slice';
import { notificationsReducer } from 'src/notifications';
import { students } from 'src/students';

export const history = createBrowserHistory();

export const rootReducer = combineReducers({
  router: connectRouter(history),
  modals: modalsReducer,
  notifications: notificationsReducer,
  students,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), routerMiddleware(history)],
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
