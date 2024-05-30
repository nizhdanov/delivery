import { queryOptions } from '@tanstack/react-query';

import { getDeliveryPackageTypes } from '@/api/requests/delivery';

export const useDeliveryPackageTypesQuery = (config?: ApiRequestConfig) =>
  queryOptions({
    queryKey: ['getDeliveryPackageTypes'],
    queryFn: () => getDeliveryPackageTypes({ config })
  });
