import { Link } from '@tanstack/react-router';
import { ChevronLeft, X } from 'lucide-react';

import type { Step } from '@/pages/order/contexts/step';

import { Typography } from './ui';

interface MobileTopNavProps {
  children: React.ReactNode;
  action: 'back' | 'close';
  step?: Step;
}

export const MobileHeader = ({ children, action, step }: MobileTopNavProps) => {
  return (
    <header className='mb-6 w-full py-4 text-center sm:hidden'>
      <Link
        to={action === 'close' ? '/' : '/order'}
        search={{ step }}
        className='absolute left-4 top-4'
      >
        {action === 'back' && <ChevronLeft className='size-6 cursor-pointer' />}
        {action === 'close' && <X className='size-6 cursor-pointer' />}
      </Link>
      <Typography as='h3'>{children}</Typography>
    </header>
  );
};
