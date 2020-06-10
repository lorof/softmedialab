import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { VariantType } from 'notistack';
import { RootState } from 'src/store';

type Notification = {
  id: string | number;
  kind: VariantType;
  message: string;
  isDismissed?: boolean;
};

const initialState: Notification[] = [];

const { actions, reducer } = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    pushNotification: (state, action: PayloadAction<Notification>) => {
      state.push(action.payload);
    },

    removeNotification: (state, action: PayloadAction<string | number>) => {
      const notifications = state.filter((notification) => {
        return notification.id !== action.payload;
      });

      return notifications;
    },
  },
});

const { pushNotification, removeNotification } = actions;

const pushDangerNotification = (message: string) =>
  pushNotification({ id: nanoid(), kind: 'error', message });
const pushWarningNotification = (message: string) =>
  pushNotification({ id: nanoid(), kind: 'warning', message });
const pushSuccessNotification = (message: string) =>
  pushNotification({ id: nanoid(), kind: 'success', message });
const pushInfoNotification = (message: string) =>
  pushNotification({ id: nanoid(), kind: 'info', message });

const notificationsSelector = (state: RootState) => state.notifications;

export {
  notificationsSelector,
  pushDangerNotification,
  pushWarningNotification,
  pushSuccessNotification,
  pushInfoNotification,
  removeNotification,
  reducer as notificationsReducer,
};
