import {IsString} from 'class-validator'

// we will use CreateCoffeeDto as expected input object shape for our coffees controller post request
// DTOs are just simple objects
// they don't contain any business logic, methods, or anything that require testing
export class CreateCoffeeDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly brand: string;
    
    // each: true will validate that every array value is string
    @IsString({each: true})
    readonly flavors: string[];
}
