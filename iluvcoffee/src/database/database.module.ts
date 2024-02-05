import { DynamicModule } from '@nestjs/common';
import { DataSource, DataSourceOptions } from 'typeorm';

export class DatabaseModule {
  static register(options: DataSourceOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: 'CONNECTION',
          useValue: new DataSource(options),
        },
      ],
    };
  }
}
