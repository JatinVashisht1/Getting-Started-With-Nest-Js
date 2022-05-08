import { PartialType } from "@nestjs/mapped-types";
import { CreateCoffeeDto } from "./create-coffee.dto";

// DTO class for patch request
// PartialType() is helpful for us because it is returning the type of the class we passed in with all the properties set to optional.
// this will maintain all the validation rules applied to CreateCoffeeDto along with one additional rule that is isOptional to true
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {

    // the code below seems redundant because we just copy and pasted create-coffee dto and updated it a little bit
    // we can avoid it by using nest mapped-types
    /*
    readonly name?: string;
    readonly brand?: string;
    readonly flavors?: string[];
    */
    
}

/**
 * In typescript to make something optional we write '?' after the VARIABLE_NAME
 * Unlike kotlin where we add '?' after datatype
 */