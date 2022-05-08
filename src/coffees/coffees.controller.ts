import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { response } from 'express';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

// decorator tell nest to generate route
@Controller('coffees')
export class CoffeesController {

    // private access modifier let's us declare and initialize CoffeesService member immediatly in the same location
    // this also lets it to be only accessable in the class itself
    // in nest it is very easy to inject dependencies because they are resolved by their type!
    constructor(private readonly coffeesService: CoffeesService){}

    // get decorator to specify the get route
    @Get(/*'flavours'*/)
    // we can access express (used by default) response object by using Res decorator
    // it is often advised to use nest standard approach whenever possible
    findAll(@Query() paginationQuery){

        // const {limit, offset} = paginationQuery

        return this.coffeesService.findAll()

        /*
        // return 'This action returns all coffees'
        return `This action returns all coffees. Limit: ${limit}, offset: ${offset}`
        */
    }

    @Get(':id')
    // param decorator let's us use all the parameters coming with request
    // we can also specify the required parameters in the param decrator
    findOne(@Param('id') id: number){
        console.log(typeof id)
        return this.coffeesService.findOne(''+id)

        // return `This action returns #${id} coffee`
    }

    @Post()
    // if we access one propery other properties won't be validated 
    // @HttpCode(HttpStatus.GONE) // to specify status codes statically 
    create(@Body(/*'name'*/) createCoffeeDto: CreateCoffeeDto){
        // this verifies that our payload can be in the shape of CreateCoffeeDto but it is not actually instance of CreateCoffeeDto yet
        // validation pipe can help us transform this object exactly what we are expecting
        console.log(createCoffeeDto instanceof CreateCoffeeDto)
        return this.coffeesService.create(createCoffeeDto)
        // return body
    }

    @Patch(':id')
    update( @Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto){
        return this.coffeesService.update(id, updateCoffeeDto)
        // return `This action updates #${id} coffee`
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.coffeesService.remove(id)
        return `this action removes #${id} coffee`
    }
}
