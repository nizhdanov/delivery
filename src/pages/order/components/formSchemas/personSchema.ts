import { z } from 'zod';

export const personSchema = z.object({
  lastname: z.string().min(1, {
    message: 'Фамилия не может быть пустой'
  }),
  firstname: z.string().min(1, {
    message: 'Имя не может быть пустым'
  }),
  middlename: z.string().optional(),
  phone: z.string()
});
