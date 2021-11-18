import { Component, OnInit } from '@angular/core';
import { Game } from './game.model';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  gameList: Game[] = [];

  constructor(private gameservice: GameService) { }

  ngOnInit(): void {
    this.gameList = this.gameservice.GetGames();
  }

}
