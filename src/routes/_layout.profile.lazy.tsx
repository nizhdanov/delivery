import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_layout/profile')({
  component: () => <div>Profile</div>
});
