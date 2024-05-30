import { Link } from '@tanstack/react-router';

import { buttonVariants } from '@/components/ui';
import { cn } from '@/lib/utils';

import type { Step } from '../contexts/step';

interface OrderButtonsProps {
  stepBack?: Step;
  stepNext: Step;
  disabled?: boolean;
}

export const OrderButtons = ({ stepBack, stepNext, disabled }: OrderButtonsProps) => {
  return (
    <div className='flex w-full gap-6 pt-10 sm:max-w-[50%]'>
      <Link
        className={cn(
          buttonVariants({ variant: 'secondary', size: 'lg' }),
          'hidden w-full sm:flex'
        )}
        to={!stepBack ? '/' : '/order'}
        search={{ step: stepBack }}
      >
        Назад
      </Link>
      <Link
        disabled={disabled}
        className={cn(buttonVariants({ size: 'lg' }), 'w-full ')}
        to='/order'
        search={{ step: stepNext }}
      >
        Продолжить
      </Link>
    </div>
  );
};
