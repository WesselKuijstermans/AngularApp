import { Injectable } from "@angular/core";
import { Game, GameRating} from "./game.model";

@Injectable ({
    providedIn: 'root'
})

export class GameService {
    readonly games: Game[] = [
        {
            id:  0,
            title:  'Forza Horizon 5',
            developer:  'Turn 10 Studios',
            publisher:  'XBOX Game Studios',
            rating:  8.8,
            agecategory:  GameRating.three
        },
        {
            id:  1,
            title:  'Call of Duty: Vanguard',
            developer:  'Sledgehammer Games',
            publisher:  'Activision',
            rating:  4.6,
            agecategory:  GameRating.eighteen
        },
        {
            id:  2,
            title:  'Destiny 2',
            developer:  'Bungie Inc',
            publisher:  'Bungie Inc',
            rating:  8.2,
            agecategory:  GameRating.twelve
        }
    ];

    constructor() {
        console.log("service constructor aangeroepen");
    }

    GetGames(): Game[] {
        return this.games;
    }

    GetGameById(id: number): Game {
        return this.games.filter((game) => game.id === id)[0];
    }
}