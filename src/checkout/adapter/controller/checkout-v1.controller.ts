import {
  Body,
  Controller,
  Inject,
  Logger,
  Post,
  UseGuards,
  Version,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { InstaMPlaceCheckoutService } from '../../domain/service/insta-m-place-checkout.interface';
import { toCheckoutEntity } from '../helper/checkout.helper';
import { CheckoutDTO } from '../model/checkout.dto';

@Controller({
  version: '1.0.0',
})
export class CheckoutControllerV1 {
  private readonly logger = new Logger(CheckoutControllerV1.name);

  constructor(
    @Inject('CheckoutService')
    private readonly instaMplaceCheckoutService: InstaMPlaceCheckoutService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Version('1.0.0')
  @Post()
  async checkoutV1_0_0(@Body() checkoutDTO: CheckoutDTO): Promise<void> {
    this.logger.debug('v1.0.0');
    return await this.instaMplaceCheckoutService.create(toCheckoutEntity(checkoutDTO));
  }

  @UseGuards(AuthGuard('jwt'))
  @Version('1.0.1')
  @Post()
  async checkoutV1_0_1(@Body() checkoutDTO: CheckoutDTO): Promise<void> {
    this.logger.debug('v1.0.1');
    this.instaMplaceCheckoutService.create(toCheckoutEntity(checkoutDTO));
  }
}
