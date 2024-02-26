import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRouter, RouterProvider } from '@tanstack/react-router';

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

const init = () => {
  const providersProps: Omit<ProvidersProps, 'children'> = {
    theme: { defaultTheme: 'system' }
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
