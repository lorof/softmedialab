import React from 'react';

import { MainLayout } from 'src/layouts';

type NotFoundPageProps = {
  title?: string;
};

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ title }) => (
  <MainLayout title={title}>
    <div>404</div>
  </MainLayout>
);
