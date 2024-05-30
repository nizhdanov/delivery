import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_wrapper/signin')({
  component: () => <div>Sign In</div>
});
