import axios from 'axios';

import { config } from 'src/config';

export const apiClient = axios.create({
  baseURL: config.apiURL,
});
