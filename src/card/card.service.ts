import { Injectable } from '@nestjs/common';

@Injectable()
export class CardService {
    private cards: CardDTO[] = [
        { title: 'myDo1', no: 1, detail: "work1" },
        { title: 'myDo2', no: 2, detail: "work2" },
        { title: 'myDo3', no: 2, detail: "work3" },
    ];

    findAll(): CardDTO[] {
        return this.cards;
    }

    findById(id: number) {
        return this.cards.find((c) => c.no === id);
    } 

    findByCondition(predicate: (card: CardDTO)=>boolean) {
        return this.cards.filter(c=>predicate(c));
    }
}
