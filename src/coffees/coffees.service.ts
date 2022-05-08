import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';


// injectable decorator denotes that this class can be injected via dependency injection
@Injectable()
// in nestjs each service is provider
// provider means that it can inject dependencies
// this means that objects can create various relationships with each other
// logic of wiring up instances of objects can be handled by nest runtime system
export class CoffeesService {
    // this is mocking database
    // we will be using real database in future
    private coffees: Coffee[] = [
        {
            id: 1,
            name: 'Shipwreck Roast',
            brand: 'Buddy Brew',
            flavors: ['chocolate', 'vanilla']
        }
    ]
    
    // services are where main core business logic should be written
    findAll(){
        return this.coffees;
    }

    findOne(id: string){

        // Nest can automatically handle errors for us by using its inbuild exception layer
        // below is the example
        // throw('A random error')

        const coffee = this.coffees.find(item => item.id === +id)
        if(!coffee){
            // nest provides some utility objects like HttpStatus.NOT_Found
            // throw new HttpException(`Coffee #${id} not found`, HttpStatus.NOT_FOUND)
            
            // nest also provides some inbuilt uitility classes like NotFoundException
            throw new NotFoundException(`Coffee #${id} not found`)
        }
        return coffee
    }

    create(createCoffeeDto: any){
        this.coffees.push(createCoffeeDto);
        return createCoffeeDto
    }

    update(id: string, updateCoffeeDto: any){
        const existingCoffee = this.findOne(id);
        if(existingCoffee){
            // update the existing entity
        }
    }

    remove(id: string){
        const coffeeIndex = this.coffees.findIndex(item => item.id == +id)
        if(coffeeIndex >= 0){
            this.coffees.splice(coffeeIndex, 1);
        }
    }
}
