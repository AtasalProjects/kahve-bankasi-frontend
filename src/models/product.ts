import { DateTime } from 'luxon';
import { Brand } from './brand';
import { Category } from './category';
import { Media } from './media';

export class Product {
  declare id: number;

  declare name: string;

  declare summary?: string;

  declare description: string;

  declare brandId: number;

  declare categoryId: number;

  declare producer: string;

  declare origin: string;

  declare specifications?: Record<string, string | number> | string;

  declare processingMethod?: string;

  declare stockQuantity: number;

  declare price: number;

  declare availability: boolean;

  declare createdAt: DateTime;

  declare updatedAt: DateTime;

  /*
    |--------------------------
    | Relationships
    |--------------------------
    */

  declare brand: Brand;

  declare category: Category;

  declare media: Media[];
}
