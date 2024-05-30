import { useMemo, useState } from 'react';

import type { Step } from './StepContext';
import { StepContext } from './StepContext';

export interface StepProviderProps {
  defaultStep?: Step;
  children: React.ReactNode;
}

export const StepProvider = ({ children, defaultStep = 'method' }: StepProviderProps) => {
  const [step, setStep] = useState<Step>(defaultStep);

  const value = useMemo(() => ({ step, setStep }), [step]);

  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
};
