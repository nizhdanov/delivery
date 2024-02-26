import { createContext } from 'react';
import * as z from 'zod';

export const step = z.enum([
  'calculation',
  'methodOfSending',
  'from',
  'to',
  'recipient',
  'payment',
  'check'
]);

export type Step = z.infer<typeof step>;

export interface StepContextProps {
  step: Step;
  setStep: (step: Step) => void;
}

export const StepContext = createContext<StepContextProps>({
  step: 'calculation',
  setStep: () => {}
});
