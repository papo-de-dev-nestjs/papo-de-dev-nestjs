import { IsArray, IsNotEmpty, IsString } from 'class-validator';

import { CheckoutMode } from '../../domain/entity/checkout.entity';

export class CheckoutItemDTO {
  @IsNotEmpty()
  price: string;
  @IsNotEmpty()
  quantity: number;
}
export class CheckoutDTO {
  @IsNotEmpty()
  @IsString()
  customer: string;
  @IsArray()
  line_items: CheckoutItemDTO[];
  @IsNotEmpty()
  mode: CheckoutMode;
  @IsString()
  @IsNotEmpty()
  success_url: string;
  @IsString()
  @IsNotEmpty()
  cancel_url: string;
}
