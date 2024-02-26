import { useSearch } from '@tanstack/react-router';

import type { Step } from './contexts/step';
import { StepProvider } from './contexts/step';
import {
  CalculationForm,
  CheckData,
  FromStreetForm,
  MethodOfSending,
  PaymentForm,
  RecipientForm,
  ToStreetForm
} from './components';

const component: Record<Step, React.ReactNode> = {
  calculation: <CalculationForm />,
  methodOfSending: <MethodOfSending />,
  from: <FromStreetForm />,
  check: <CheckData />,
  payment: <PaymentForm />,
  recipient: <RecipientForm />,
  to: <ToStreetForm />
};

export const Index = () => {
  const { step } = useSearch({
    from: '/'
  });

  const defaultStep = step ?? 'calculation';

  return <StepProvider defaultStep={defaultStep}>{component[defaultStep]}</StepProvider>;
};
