import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Calculator, Clock, LogOut, UserRound } from 'lucide-react';

import { ThemeToggle } from '@/components';
import { FullLogoIcon } from '@/components/icons';
import { Button } from '@/components/ui';
import { NotFound } from '@/pages/NotFound';

const links = [
  {
    title: 'История',
    to: '/history',
    icon: Clock
  },
  {
    title: 'Профиль',
    to: '/profile',
    icon: UserRound
  }
];

const mobilelinks = [
  {
    title: 'Расчёт',
    to: '/',
    icon: Calculator
  },
  ...links
];

const Root = () => (
  <>
    <nav className='fixed bottom-0 left-0 right-0 z-10 flex justify-around bg-background py-3 sm:hidden'>
      {mobilelinks.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className='flex flex-col items-center gap-1 text-xs text-foreground [&.active]:text-primary'
        >
          <link.icon className='size-5' />
          <span>{link.title}</span>
        </Link>
      ))}
    </nav>

    <header className='sticky left-0 right-0 top-0 z-10 hidden justify-center bg-background py-2 sm:flex'>
      <div className='flex w-full max-w-5xl items-center justify-between'>
        <div className='flex items-center gap-8'>
          <Link to='/'>
            <FullLogoIcon />
          </Link>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className='flex items-center gap-4 text-base [&.active]:text-primary'
            >
              <link.icon className='size-5' />
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
        <div className='flex items-center gap-4'>
          <ThemeToggle />
          <Button variant='ghost' className='gap-4'>
            <LogOut className='size-5' />
            Выйти
          </Button>
        </div>
      </div>
    </header>

    <div className='mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center px-4 sm:min-h-[calc(100vh-56px)] lg:px-0'>
      <Outlet />
    </div>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({
  component: Root,
  notFoundComponent: () => <NotFound />
});
