import { createFileRoute } from '@tanstack/react-router';
import * as z from 'zod';

import { step } from '@/pages/index/contexts/step';
import { Index } from '@/pages/index/Index';

const indexSearchSchema = z.object({
  step: step.optional().catch('calculation')
});

export const Route = createFileRoute('/')({
  component: Index,
  validateSearch: indexSearchSchema
});
