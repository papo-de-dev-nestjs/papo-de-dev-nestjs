import { CheckoutEntity } from 'src/checkout/domain/entity/checkout.entity';
import { CheckoutDTO } from '../model/checkout.dto';

export const toCheckoutEntity = (checkoutDTO: CheckoutDTO): CheckoutEntity => {
  return checkoutDTO;
};
