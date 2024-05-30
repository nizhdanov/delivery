import { api } from '@/api/instance';
import type { DeliveryAdress, DeliveryOption, DeliveryPoint, Person } from '@/api/types';

export interface OrderDeliveryDto {
  senderPoint: DeliveryPoint;
  senderAddress: DeliveryAdress;
  sender: Person;
  receiverPoint: DeliveryPoint;
  receiverAddress: DeliveryAdress;
  receiver: Person;
  payer: 'RECEIVER' | 'SENDER';
  option: DeliveryOption;
}

export interface OrderDeliveryResponse extends BaseResponse {
  order: Omit<OrderDeliveryDto, 'option'> & { status: 0 | 1 | 2 | 3 | 4 | 5; cancellable: boolean };
}

export const postDeliveryOrder = ({ data, config }: RequestConfig<OrderDeliveryDto>) =>
  api.post<OrderDeliveryResponse>('/delivery/calc', data, config);
