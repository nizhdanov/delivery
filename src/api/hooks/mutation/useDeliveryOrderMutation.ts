import { useMutation } from '@tanstack/react-query';

import type { OrderDeliveryDto } from '@/api/requests/delivery';
import { postDeliveryOrder } from '@/api/requests/delivery';

export const useDeliveryOrderMutation = (
  settings?: MutationSettings<RequestConfig<OrderDeliveryDto>, typeof postDeliveryOrder>
) =>
  useMutation({
    mutationKey: ['postDeliveryOrder'],
    mutationFn: ({ data, config }) =>
      postDeliveryOrder({ data, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
