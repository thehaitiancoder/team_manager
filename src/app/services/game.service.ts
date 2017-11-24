import { Injectable } from '@angular/core';
import { Game } from '../models/games';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GameService {
  base = '/api/games';
  games: Game[];
  gameSubject = new BehaviorSubject<Game[]>(this.games)

  constructor(private _http: Http) {
    this.refresh();
  }

  refresh(): void{
    this._http.get(this.base).subscribe(
      (response) => {
        this.games = response.json();
        this.gameSubject.next(this.games);
        console.log("refreshed");
      }
    );
  }

  getGames(){
    this.refresh();
    return this.gameSubject.getValue();
  }

  createGames(game: Game){
    return this._http.post(this.base, game)
    .subscribe(
      game => {
        console.log("The game was created")
        this.refresh();
      },
      err => {console.log("Errors while creating the game", err)}
    )
  }

}
