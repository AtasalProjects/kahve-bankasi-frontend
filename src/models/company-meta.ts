import MetaType from 'src/enums/meta-type';
import { Client } from 'src/enums/client';
import { DateTime } from 'luxon';
import { Media } from 'src/models/media';

export class CompanyMeta {
  declare id: number;

  declare client: Client;

  declare type: MetaType;

  declare key: string;

  declare value: string;

  declare createdAt: DateTime;

  declare updatedAt: DateTime;

  /*
  |--------------------------
  | Relationships
  |--------------------------
  */

  declare media: Media[];
}
