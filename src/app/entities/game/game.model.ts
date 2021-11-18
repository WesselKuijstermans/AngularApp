export enum GameRating {
    eighteen = '18+',
    sixteen = '16+',
    twelve = '12+',
    seven = '7+',
    three = '3+',
    unspecified = 'N/A',
}

export class Game {
    id: number = 0;
    title: string = '';
    developer: string = '';
    publisher: string = '';
    rating: number = 0.0;
    agecategory: GameRating = GameRating.unspecified;

    constructor(title = "", developer = '', publisher = '', rating = 0) {
        this.title = title;
        this.developer = developer;
        this.publisher = publisher;
        this.rating = rating;
    }
}