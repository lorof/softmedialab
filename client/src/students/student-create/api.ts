import { apiClient } from 'src/common/api-client';
import { StudentFormValues } from '../common/student-form';
import { components } from 'src/autogen-types';

export const studentCreateApi = {
  createStudent: (data: StudentFormValues) =>
    apiClient
      .post<components['schemas']['GetStudentDto']>('/students', data)
      .then(({ data }) => data),
};
