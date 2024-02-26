import { Link } from '@tanstack/react-router';

import { buttonVariants } from '@/components/ui';

export const NotFound = () => {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-4 bg-background text-foreground'>
      404
      <Link to='/' className={buttonVariants()} replace>
        На главную
      </Link>
    </div>
  );
};
