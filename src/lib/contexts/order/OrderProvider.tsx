import { useMemo, useState } from 'react';

import type { PartialOrderDeliveryDto } from './OrderContext';
import { OrderContext } from './OrderContext';

export interface OrderProviderProps {
  children: React.ReactNode;
}

export const OrderProvider = ({ children }: OrderProviderProps) => {
  const [order, setOrder] = useState<PartialOrderDeliveryDto>({});

  const value = useMemo(() => ({ order, setOrder }), [order]);

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
};
