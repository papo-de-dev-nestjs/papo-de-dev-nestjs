export enum CheckoutMode {
  PAYMENT = 'payment',
}

export interface CheckoutItem {
  price: string;
  quantity: number;
}
export interface CheckoutEntity {
  customer: string;
  line_items: CheckoutItem[];
  mode: CheckoutMode;
  success_url: string;
  cancel_url: string;
}
