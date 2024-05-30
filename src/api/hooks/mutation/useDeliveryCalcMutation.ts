import { useMutation } from '@tanstack/react-query';

import type { CalcDeliveryDto } from '@/api/requests/delivery';
import { postDeliveryCalc } from '@/api/requests/delivery';

export const useDeliveryCalcMutation = (
  settings?: MutationSettings<RequestConfig<CalcDeliveryDto>, typeof postDeliveryCalc>
) =>
  useMutation({
    mutationKey: ['postDeliveryCalc'],
    mutationFn: ({ data, config }) =>
      postDeliveryCalc({ data, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
