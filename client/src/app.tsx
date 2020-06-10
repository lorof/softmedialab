import React from 'react';

import { Router } from 'src/router/router';
import { Notifications } from 'src/notifications';

export const App: React.FC = () => (
  <>
    <Notifications />
    <Router />
  </>
);
