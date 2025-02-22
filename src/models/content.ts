import { Category } from 'src/models/category';
import { Client } from 'src/enums/client';
import { DateTime } from 'luxon';
import { Media } from 'src/models/media';

export class Content {
  declare id: number;

  declare client: Client;

  declare categoryId: number;

  declare head: string | null;

  declare head2: string | null;

  declare body: string | null;

  declare body2: string | null;

  declare footer: string | null;

  declare link: string | null;

  declare icon: string | null;

  declare date: DateTime | null;

  declare location: string | null;

  declare createdAt: DateTime;

  declare updatedAt: DateTime | null;

  /*
  |--------------------------
  | Relationships
  |--------------------------
  */

  declare category: Category;

  declare media: Media[];
}
