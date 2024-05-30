import { createFileRoute } from '@tanstack/react-router';

import { deliveryPointsQueryOptions } from '@/api/options';
import { Calc } from '@/pages/calc';

export const Route = createFileRoute('/_layout/')({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(deliveryPointsQueryOptions()),
  component: Calc
});
