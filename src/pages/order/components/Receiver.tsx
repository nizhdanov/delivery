import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from '@tanstack/react-router';
import type { z } from 'zod';

import { MobileHeader } from '@/components';
import {
  Button,
  buttonVariants,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Typography
} from '@/components/ui';
import { cn } from '@/lib/utils';

import { personSchema } from './formSchemas/personSchema';

export const Receiver = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof personSchema>>({
    resolver: zodResolver(personSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      middlename: '',
      phone: '+7'
    },
    mode: 'onBlur'
  });

  const onSubmit = (data: z.infer<typeof personSchema>) => {
    navigate({
      to: '/order',
      search: { step: 'receiver' }
    });
  };

  return (
    <main className='w-full sm:pt-8'>
      <MobileHeader action='back' step='method'>
        Получатель
      </MobileHeader>
      <Typography as='h3' className='mb-6 hidden sm:block'>
        Получатель
      </Typography>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-full max-w-[608px] space-y-6 sm:max-w-[512px]'
          >
            <FormField
              control={form.control}
              name='lastname'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Фамилия</FormLabel>
                  <FormControl>
                    <Input placeholder='Фамилия' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='firstname'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Имя</FormLabel>
                  <FormControl>
                    <Input placeholder='Имя' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='middlename'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Отчество</FormLabel>
                  <FormControl>
                    <Input placeholder='Отчество (при наличии)' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='phone'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Номер телефона</FormLabel>
                  <FormControl>
                    <Input placeholder='Телефон' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='flex w-full gap-6 pt-10 '>
              <Link
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'hidden w-full sm:flex'
                )}
                to='/order'
                search={{ step: 'method' }}
              >
                Назад
              </Link>
              <Button type='submit' size='lg' className='w-full '>
                Продолжить
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
};
