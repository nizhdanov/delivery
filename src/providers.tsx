import type { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';

import type { ThemeProviderProps } from './lib/contexts/theme';
import { ThemeProvider } from './lib/contexts/theme';

export interface ProvidersProps {
  children: React.ReactNode;
  theme: Omit<ThemeProviderProps, 'children'>;
  queryClient: QueryClient;
}

export const Providers = ({ theme, queryClient, children }: ProvidersProps) => (
  <ThemeProvider {...theme}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </ThemeProvider>
);
