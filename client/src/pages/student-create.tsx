import React from 'react';

import { MainLayout } from 'src/layouts';
import { StudentCreate } from 'src/students';

export type StudentsPageProps = {
  title?: string;
};

export const StudentCreatePage: React.FC<StudentsPageProps> = ({ title }) => (
  <MainLayout title={title}>
    <StudentCreate />
  </MainLayout>
);
