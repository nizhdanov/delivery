import React from 'react';
import ReactDOM from 'react-dom/client';
import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { toast } from 'sonner';

import type { ProvidersProps } from './providers';
import { Providers } from './providers';
import { routeTree } from './routeTree.gen';

import './assets/styles/index.css';

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
const DEFAULT_ERROR = 'Something went wrong';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, staleTime: 1000 } },
  queryCache: new QueryCache({
    onError: (err) => {
      toast.error(err.message ?? DEFAULT_ERROR, {
        cancel: { label: 'Close' }
      });
    }
  }),
  mutationCache: new MutationCache({
    onError: (err) => {
      toast.error(err.message ?? DEFAULT_ERROR, {
        cancel: { label: 'Close' }
      });
    }
  })
});

const init = () => {
  const providersProps: Omit<ProvidersProps, 'children'> = {
    theme: { defaultTheme: 'system' },
    queryClient
  };

  root.render(
    <React.StrictMode>
      <Providers {...providersProps}>
        <RouterProvider router={router} />
      </Providers>
    </React.StrictMode>
  );
};

init();
