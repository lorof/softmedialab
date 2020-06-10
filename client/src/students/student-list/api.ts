import { apiClient } from 'src/common/api-client';
import { components } from 'src/autogen-types';

export const studentListApi = {
  getStudentList: () =>
    apiClient
      .get<components['schemas']['GetStudentDto'][]>('/students')
      .then(({ data }) => data),

  removeStudent: (studentId: string) =>
    apiClient.delete(`/students/${studentId}`),
};
