import { createFileRoute, Outlet } from '@tanstack/react-router';

const Wrapper = () => (
  <div className='mx-auto flex min-h-screen w-full max-w-5xl justify-center px-4 sm:min-h-[calc(100vh-72px)] lg:px-0'>
    <Outlet />
  </div>
);

export const Route = createFileRoute('/_wrapper')({
  component: Wrapper
});
