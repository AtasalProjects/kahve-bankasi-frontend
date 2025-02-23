import { DateTime } from 'luxon';
import { Client } from 'src/enums/client';
import { Content } from 'src/models/content';

export class Category {
  declare id: number;

  declare client: Client;

  declare name: string;

  declare description: string;

  declare createdAt: DateTime;

  declare updatedAt: DateTime;

  /*
  |--------------------------
  | Relationships
  |--------------------------
  */

  declare contents: Content[];
}

export type Categories = 'coffee' | 'nuts' | 'contact' | 'social' | 'location';
