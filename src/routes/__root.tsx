import type { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { LogOutIcon } from 'lucide-react';

import { ThemeToggle } from '@/components';
import { FullLogoIcon } from '@/components/icons';
import { Button, buttonVariants, Toaster } from '@/components/ui';
import { links } from '@/lib/constants';
import { cn } from '@/lib/utils';

const Root = () => (
  <>
    <header className='sticky left-0 right-0 top-0 z-10 hidden justify-center bg-background px-4 py-4 sm:flex'>
      <div className='flex w-full max-w-5xl items-center justify-between'>
        <div className='flex items-center gap-8'>
          <Link to='/'>
            <FullLogoIcon />
          </Link>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(buttonVariants({ variant: 'ghost' }), 'gap-4 [&.active]:text-primary')}
            >
              <link.icon className='size-5' />
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
        <div className='flex items-center gap-4'>
          <ThemeToggle />
          <Button variant='ghost' className='gap-4'>
            <LogOutIcon className='size-5' />
            Выйти
          </Button>
        </div>
      </div>
    </header>

    <Outlet />
    <Toaster />
    <TanStackRouterDevtools />
    <ReactQueryDevtools initialIsOpen />
  </>
);

const NotFound = () => {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-4 bg-background text-foreground'>
      404
      <Link to='/' className={buttonVariants()} replace>
        На главную
      </Link>
    </div>
  );
};

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: Root,
  notFoundComponent: NotFound
});
