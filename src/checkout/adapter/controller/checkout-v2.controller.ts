import {
  Body,
  Controller,
  Inject,
  Logger,
  Post,
  Version,
} from '@nestjs/common';
import { InstaMPlaceCheckoutService } from '../../domain/service/insta-m-place-checkout.interface';
import { toCheckoutEntity } from '../helper/checkout.helper';
import { CheckoutDTO } from '../model/checkout.dto';

@Controller({
  version: '2.0.0',
})
export class CheckoutControllerV2 {
  private readonly logger = new Logger(CheckoutControllerV2.name);

  constructor(
    @Inject('CheckoutService')
    private readonly instaMPlaceCheckoutService: InstaMPlaceCheckoutService,
  ) {}

  @Version('2.0.0')
  @Post()
  async checkoutV1_0_0(@Body() checkoutDTO: CheckoutDTO): Promise<void> {
    this.logger.debug('v2.0.0');
    this.instaMPlaceCheckoutService.create(toCheckoutEntity(checkoutDTO));
  }

  @Post()
  @Version('2.0.1')
  async checkoutV1_0_1(@Body() checkoutDTO: CheckoutDTO): Promise<void> {
    this.logger.debug('v2.0.1');
    this.instaMPlaceCheckoutService.create(toCheckoutEntity(checkoutDTO));
  }
}
