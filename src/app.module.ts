import { Module } from '@nestjs/common';
import { CheckoutControllerV1 } from './checkout/adapter/controller/checkout-v1.controller';
import { CheckoutControllerV2 } from './checkout/adapter/controller/checkout-v2.controller';
import { CheckoutStripeServiceImpl } from './checkout/adapter/service/checkout-stripe.service';
import * as dotenv from 'dotenv';
import Stripe from 'stripe';
import { AuthModule } from './auth/auth.module';
import { InstaMPlaceCheckoutServiceImpl } from './checkout/domain/service/insta-m-place-checkout.service';

dotenv.config();

@Module({
  imports: [AuthModule],
  controllers: [CheckoutControllerV1, CheckoutControllerV2],
  providers: [
    {
      provide: 'CheckoutService',
      useClass: CheckoutStripeServiceImpl,
    },
    {
      provide: 'InstaMPlaceCheckoutService',
      useClass: InstaMPlaceCheckoutServiceImpl,
    },    
    {
      provide: 'STRIPE_OBJ',
      useFactory: () =>
        new Stripe(process.env.SECRET_KEY_TEST, {
          apiVersion: '2020-08-27',
        }),
    },
  ],
})
export class AppModule {}
