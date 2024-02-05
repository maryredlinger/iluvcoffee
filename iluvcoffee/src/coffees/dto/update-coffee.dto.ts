import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

// partial type will return all the types in createcoffeedto as optional
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
