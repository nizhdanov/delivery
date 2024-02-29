import { api } from '@/api/instance';
import type { DeliveryPackageType } from '@/api/types';

export interface DeliveryPackageTypesResponse extends BaseResponse {
  packages: DeliveryPackageType[];
}

export const getDeliveryPackageTypes = ({ config }: RequestConfig) =>
  api.get<DeliveryPackageTypesResponse>('/delivery/package/types', config);
