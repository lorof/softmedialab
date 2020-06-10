import React from 'react';

import { MainLayout } from 'src/layouts';
import { StudentDetail } from 'src/students';

export type StudentsPageProps = {
  title?: string;
};

export const StudentDetailPage: React.FC<StudentsPageProps> = ({ title }) => (
  <MainLayout title={title}>
    <StudentDetail />
  </MainLayout>
);
