import { apiClient } from 'src/common/api-client';
import { components } from 'src/autogen-types';
import { StudentFormValues } from '../common/student-form';

export const studentDetailApi = {
  getStudentDetail: (studentId: string) =>
    apiClient
      .get<components['schemas']['GetStudentDto']>(`/students/${studentId}`)
      .then(({ data }) => data),

  removeStudent: (studentId: string) =>
    apiClient.delete(`/students/${studentId}`),

  updateStudent: (studentId: string, formValues: StudentFormValues) =>
    apiClient.put(`/students/${studentId}`, formValues),
};
