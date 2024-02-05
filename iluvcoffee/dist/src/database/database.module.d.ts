import { DynamicModule } from '@nestjs/common';
import { DataSourceOptions } from 'typeorm';
export declare class DatabaseModule {
    static register(options: DataSourceOptions): DynamicModule;
}
