import { Inject, Injectable, Logger } from '@nestjs/common';
import { CheckoutEntity } from '../../domain/entity/checkout.entity';
import { CheckoutService } from './checkout.service';
import { InstaMPlaceCheckoutService } from './insta-m-place-checkout.interface';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class InstaMPlaceCheckoutServiceImpl implements InstaMPlaceCheckoutService {
  private readonly logger = new Logger(InstaMPlaceCheckoutServiceImpl.name);

  constructor(
    @Inject('CheckoutService')
    private readonly checkoutService: CheckoutService,
  ) {}

  async create(checkoutEntity: CheckoutEntity) {
    this.logger.log({ checkoutEntity });
    try {
      const result = await this.checkoutService.create(checkoutEntity);
      return result;
    } catch (ex) {
      console.log(ex);
      throw ex;
    }
  }

  updateCallbackURLs(checkoutEntity: CheckoutEntity) {
    checkoutEntity.success_url = process.env.INSTAMPLACE_SUCCESS_URL;
    checkoutEntity.cancel_url = process.env.INSTAMPLACE_CANCEL_URL;
  }
}