import { useMutation } from '@tanstack/react-query';

import type { CalculateDeliveryDto } from '@/api/requests/delivery';
import { postDeliveryCalc } from '@/api/requests/delivery';

export const useDeliveryCalcMutation = (
  settings?: MutationSettings<RequestConfig<CalculateDeliveryDto>, typeof postDeliveryCalc>
) =>
  useMutation({
    mutationKey: ['postDeliveryCalc'],
    mutationFn: ({ data, config }) =>
      postDeliveryCalc({ data, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
