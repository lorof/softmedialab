import { format } from 'date-fns';

export const dates = {
  parse: (date?: string) => {
    if (!date) return;

    return format(new Date(date), 'dd.MM.yyyy');
  },

  unparse: (date?: string) => {
    if (!date) return;

    return new Date(date).toISOString();
  },
};
