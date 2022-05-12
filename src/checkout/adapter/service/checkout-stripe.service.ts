import { Inject, Injectable, Logger } from '@nestjs/common';
import { Stripe } from 'stripe';
import { CheckoutEntity } from '../../domain/entity/checkout.entity';
import { CheckoutService } from '../../domain/service/checkout.service';


@Injectable()
export class CheckoutStripeServiceImpl implements CheckoutService {
  private readonly logger = new Logger(CheckoutStripeServiceImpl.name);

  constructor(
    @Inject('STRIPE_OBJ')
    private readonly stripe: Stripe,
  ) {}

  async create(checkoutEntity: CheckoutEntity) {
    this.logger.log({ checkoutEntity });
    try {
      const result = await this.stripe.checkout.sessions.create(checkoutEntity);
      return result;
    } catch (ex) {
      console.log(ex);
      throw ex;
    }
  }
}
