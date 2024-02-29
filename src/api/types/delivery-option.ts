export interface DeliveryOption {
  id: string;
  price: number;
  days: number;
  name: string;
  type: 'DEFAULT' | 'EXPRESS';
}
