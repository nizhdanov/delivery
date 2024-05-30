import { createContext } from 'react';

import type { OrderDeliveryDto } from '@/api/requests/delivery';

export type PartialOrderDeliveryDto = RecursivePartial<OrderDeliveryDto>;

export interface OrderContextProps {
  order: PartialOrderDeliveryDto;
  setOrder: (order: PartialOrderDeliveryDto) => void;
}

export const OrderContext = createContext<OrderContextProps>({
  order: {},
  setOrder: () => {}
});
