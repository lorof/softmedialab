import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar, SnackbarKey } from 'notistack';
import { Button } from '@material-ui/core';

import { removeNotification, notificationsSelector } from './slice';

export const Notifications: React.FC = () => {
  const displayedNotifications = useRef<SnackbarKey[]>([]);
  const dispatch = useDispatch();
  const notifications = useSelector(notificationsSelector);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const storeDisplayed = (id: SnackbarKey) => {
    displayedNotifications.current = [...displayedNotifications.current, id];
  };

  const removeDisplayed = (id: SnackbarKey) => {
    displayedNotifications.current = [
      ...displayedNotifications.current.filter((key) => id !== key),
    ];
  };

  useEffect(() => {
    notifications.forEach(({ id, message, kind, isDismissed = false }) => {
      if (isDismissed) {
        closeSnackbar(id);
        return;
      }

      if (displayedNotifications.current.includes(id)) return;

      enqueueSnackbar(message, {
        key: id,
        variant: kind,
        onExited: (_, myKey: SnackbarKey) => {
          dispatch(removeNotification(myKey));
          removeDisplayed(myKey);
        },
        action: (key) => (
          <Button onClick={() => closeSnackbar(key)}>dismiss me</Button>
        ),
      });

      storeDisplayed(id);
    });
  }, [notifications, closeSnackbar, enqueueSnackbar, dispatch]);

  return null;
};
