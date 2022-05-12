import { CheckoutEntity } from '../entity/checkout.entity';

export interface InstaMPlaceCheckoutService {
  create(checkoutEntity: CheckoutEntity);
}
