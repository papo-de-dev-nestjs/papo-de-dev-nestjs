import { CheckoutEntity } from '../entity/checkout.entity';

export interface CheckoutService {
  create(checkoutEntity: CheckoutEntity);
}
