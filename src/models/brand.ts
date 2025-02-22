import { DateTime } from 'luxon';
import { Product } from './product';

export class Brand {
  declare id: number;

  declare name: string;

  declare description?: string;

  declare createdAt: DateTime;

  declare updatedAt: DateTime;

  declare products: Product[];
}
