import { api } from '@/api/instance';
import type { DeliveryOption, DeliveryPackageType, DeliveryPoint } from '@/api/types';

export interface CalculateDeliveryResponse extends BaseResponse {
  options: DeliveryOption[];
}

export interface CalculateDeliveryDto {
  package: Omit<DeliveryPackageType, 'id' | 'name'>;
  senderPoint: Omit<DeliveryPoint, 'id' | 'name'>;
  receiverPoint: Omit<DeliveryPoint, 'id' | 'name'>;
}

export const postDeliveryCalc = ({ data, config }: RequestConfig<CalculateDeliveryDto>) =>
  api.post<CalculateDeliveryResponse>('/delivery/calc', data, config);
