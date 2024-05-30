import { createFileRoute, Link, Outlet } from '@tanstack/react-router';

import { mobilelinks } from '@/lib/constants';

const Layout = () => (
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

    <div className='mx-auto flex min-h-screen w-full max-w-5xl justify-center px-4 sm:min-h-[calc(100vh-72px)] lg:px-0'>
      <Outlet />
    </div>
  </>
);

export const Route = createFileRoute('/_layout')({
  component: Layout
});
