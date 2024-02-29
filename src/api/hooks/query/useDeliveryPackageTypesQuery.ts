import { useQuery } from '@tanstack/react-query';

import { getDeliveryPackageTypes } from '@/api/requests/delivery';

export const useDeliveryPackageTypesQuery = (
  settings?: QuerySettings<typeof getDeliveryPackageTypes>
) =>
  useQuery({
    queryKey: ['getDeliveryPackageTypes'],
    queryFn: () => getDeliveryPackageTypes({ config: settings?.config }),
    ...settings?.options
  });
