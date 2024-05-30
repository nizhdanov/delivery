import { queryOptions } from '@tanstack/react-query';

import { getDeliveryPoints } from '@/api/requests/delivery';

export const deliveryPointsQueryOptions = (config?: ApiRequestConfig) =>
  queryOptions({
    queryKey: ['getDeliveryPoints'],
    queryFn: () => getDeliveryPoints({ config })
  });
