import { useState } from 'react';
import type { MutationState } from '@tanstack/react-query';
import { useMutationState } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { Plane, Truck } from 'lucide-react';

import type { CalcDeliveryResponse } from '@/api/requests/delivery';
import type { DeliveryOption } from '@/api/types';
import { MobileHeader } from '@/components';
import { buttonVariants, Card, Typography } from '@/components/ui';
import { useOrder } from '@/lib/contexts/order';
import { cn, morph } from '@/lib/utils';

export const Method = () => {
  const { order, setOrder } = useOrder();
  const [selected, setSelected] = useState<string | undefined>();
  const optionsMutationState = useMutationState({
    filters: { mutationKey: ['postDeliveryCalc'] },
    select: (mutation) => mutation.state.data as MutationState<CalcDeliveryResponse>
  });

  const onClickSelect = (option: DeliveryOption) => {
    setSelected(option.id);
    setOrder({ ...order, option });
  };

  return (
    <main className='w-full sm:pt-8'>
      <MobileHeader action='close'>Способ отправки</MobileHeader>
      <Typography as='h3' className='mb-6 hidden sm:block'>
        Способ отправки
      </Typography>
      <div className='flex flex-col gap-6 sm:flex-row'>
        {optionsMutationState[0]?.data?.options?.map((option) => (
          <Card
            onClick={() => onClickSelect(option)}
            key={option.id}
            className={cn(
              'flex flex-1 cursor-pointer gap-4 p-4',
              selected === option.id && 'bg-primary text-primary-foreground'
            )}
          >
            <div
              className={cn(
                'flex size-12 flex-none items-center justify-center rounded-full bg-muted text-muted-foreground',
                selected === option.id && 'text-accent-foreground'
              )}
            >
              {option.type === 'EXPRESS' && <Plane />}
              {option.type === 'DEFAULT' && <Truck />}
            </div>

            <div className='flex flex-col gap-2'>
              <p className='capitalize leading-none'>{option.name}</p>
              <Typography as='h3'>{option.price} ₽</Typography>
              <p>
                {option.days} {morph(option.days, ['рабочий день', 'рабочих дня', 'рабочих дней'])}
              </p>
            </div>
          </Card>
        ))}
      </div>
      <div className='flex w-full gap-6 pt-10 sm:max-w-[50%]'>
        <Link
          className={cn(
            buttonVariants({ variant: 'outline', size: 'lg' }),
            'hidden w-full sm:flex'
          )}
          to='/'
        >
          Назад
        </Link>
        <Link
          className={cn(buttonVariants({ size: 'lg' }), 'w-full ')}
          to='/order'
          search={{ step: 'receiver' }}
          disabled={!selected}
        >
          Продолжить
        </Link>
      </div>
    </main>
  );
};
