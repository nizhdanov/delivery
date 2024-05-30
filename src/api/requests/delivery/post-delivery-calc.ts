import { api } from '@/api/instance';
import type { DeliveryOption, DeliveryPackageType, DeliveryPoint } from '@/api/types';

export interface CalcDeliveryResponse extends BaseResponse {
  options: DeliveryOption[];
}

export interface CalcDeliveryDto {
  package: Omit<DeliveryPackageType, 'id' | 'name'>;
  senderPoint: Omit<DeliveryPoint, 'id' | 'name'>;
  receiverPoint: Omit<DeliveryPoint, 'id' | 'name'>;
}

export const postDeliveryCalc = ({ data, config }: RequestConfig<CalcDeliveryDto>) =>
  api.post<CalcDeliveryResponse>('/delivery/calc', data, config);
