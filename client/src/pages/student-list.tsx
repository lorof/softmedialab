import React from 'react';
import { MainLayout } from 'src/layouts';
import { StudentList } from 'src/students';

export type StudentsPageProps = {
  title?: string;
};

export const StudentListPage: React.FC<StudentsPageProps> = ({ title }) => (
  <MainLayout title={title}>
    <StudentList />
  </MainLayout>
);
