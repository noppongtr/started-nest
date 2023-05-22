import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { CardService } from './card.service';

@Controller('card')
export class CardController {
    constructor(private cardService: CardService) {
    }

    @Get()
    getCardAll(@Query('title') cardTitle ?: string): CardDTO[] {
        if (cardTitle) {
            return this.cardService.findByCondition((card) => 
                card.title.includes(cardTitle),
            );
        }
        return this.cardService.findAll();
    }

    @Get(':id')
    getCardById(@Param('id') id: string) {
        return this.cardService.findById(Number(id));
    }

    @Post()
    createCard(@Body() body: CardDTO, @Body("title") title:string, @Body("detail") detail:string){
        console.log(body);
        console.log(`title : ${body.title}, detail : ${detail}`);
    }
}
