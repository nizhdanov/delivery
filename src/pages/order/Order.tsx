import { Route } from '@/routes/_wrapper.order';

import type { Step } from './contexts/step';
import { StepProvider } from './contexts/step';
import { Check, From, Method, Receiver, Sender, To } from './components';

const component: Record<Step, React.ReactNode> = {
  method: <Method />,
  receiver: <Receiver />,
  sender: <Sender />,
  from: <From />,
  to: <To />,
  check: <Check />
};

export const Order = () => {
  const { step } = Route.useSearch();
  const defaultStep = step ?? 'method';

  return <StepProvider defaultStep={defaultStep}>{component[defaultStep]}</StepProvider>;
};
