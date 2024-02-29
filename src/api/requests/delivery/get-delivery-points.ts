import { api } from '@/api/instance';
import type { DeliveryPoint } from '@/api/types';

export interface DeliveryPointsResponse extends BaseResponse {
  points: DeliveryPoint[];
}

export const getDeliveryPoints = ({ config }: RequestConfig) =>
  api.get<DeliveryPointsResponse>('/delivery/points', config);
