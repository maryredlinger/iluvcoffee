import { CoffeeRefactor1706308382883 } from 'src/migrations/1706308382883-CoffeeRefactor';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [],
  migrations: [CoffeeRefactor1706308382883],
});
