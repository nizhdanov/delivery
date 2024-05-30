import { createFileRoute } from '@tanstack/react-router';
import * as z from 'zod';

import { step } from '@/pages/order/contexts/step';
import { Order } from '@/pages/order/Order';

const orderSearchSchema = z.object({
  step: step.optional().catch('method')
});

export const Route = createFileRoute('/_wrapper/order')({
  component: Order,
  validateSearch: orderSearchSchema
});
