import type { ThemeProviderProps } from './lib/contexts/theme';
import { ThemeProvider } from './lib/contexts/theme';

export interface ProvidersProps {
  children: React.ReactNode;
  theme: Omit<ThemeProviderProps, 'children'>;
}

export const Providers = ({ theme, children }: ProvidersProps) => (
  <ThemeProvider {...theme}>{children}</ThemeProvider>
);
