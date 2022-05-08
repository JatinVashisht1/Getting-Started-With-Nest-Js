import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';


// Module decorator provides meta-data that nest uses to oranise the application structure
@Module({
    controllers: [CoffeesController],
    providers: [CoffeesService],
    
})
export class CoffeesModule {}
