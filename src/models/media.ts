import { DateTime } from 'luxon';

export class Media {
  declare id: number;

  declare modelId: number;

  declare url: string;

  declare name: string;

  declare ext: string;

  declare size: number;

  declare modelName: string;

  declare createdAt: DateTime;

  declare updatedAt: DateTime;
}
