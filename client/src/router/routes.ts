import { IndexPage } from 'src/pages/index';
import { StudentListPage } from 'src/pages/student-list';
import { NotFoundPage } from 'src/pages/not-found';
import { StudentDetailPage } from 'src/pages/student-detail';
import { StudentCreatePage } from 'src/pages/student-create';

export const routes = [
  {
    path: '/',
    exact: true,
    component: IndexPage,
    title: 'SoftMediaLab',
  },
  {
    path: '/students',
    exact: true,
    component: StudentListPage,
    title: 'SoftMediaLab - students-list',
  },
  {
    path: '/students/create',
    exact: true,
    component: StudentCreatePage,
    title: 'SoftMediaLab - students-create',
  },
  {
    path: '/students/:id',
    exact: true,
    component: StudentDetailPage,
    title: 'SoftMediaLab - students-detail',
  },
  {
    path: '*',
    exact: true,
    component: NotFoundPage,
    title: 'SoftMediaLab - 404',
  },
];
