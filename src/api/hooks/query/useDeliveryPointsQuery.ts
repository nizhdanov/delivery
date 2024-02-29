import { useQuery } from '@tanstack/react-query';

import { getDeliveryPoints } from '@/api/requests/delivery';

export const useDeliveryPointsQuery = (settings?: QuerySettings<typeof getDeliveryPoints>) =>
  useQuery({
    queryKey: ['getDeliveryPoints'],
    queryFn: () => getDeliveryPoints({ config: settings?.config }),
    ...settings?.options
  });
