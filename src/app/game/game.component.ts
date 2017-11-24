import { Component, OnInit } from '@angular/core';
import { Game } from '../models/games';
import { Rsvp } from '../models/rsvps';
import { Player } from '../models/player';
import {GameService} from '../services/game.service';
import { PlayerService } from '../services/player.service';
import { RsvpService } from '../services/rsvp.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game= new Game();
  games: Array<Game>;
  rsvps: Rsvp[];
  rsvp= new Rsvp();
  players: Array<Player>;
  playerName: Array<string>;
  constructor(
    private _gameService: GameService, 
    private _playerService: PlayerService, 
    private _rsvpService: RsvpService,
    private _router: Router) {
    
  }

  ngOnInit() {
    // Get the games number on init
    this._gameService.gameSubject.subscribe(
      games => {
        this.games = games
        console.log(this.games)
      }
    );

    // get the the reservation list for the games
    this._rsvpService.getRsvps()
    .then(rsvps => {
      this.rsvps = rsvps;
    })
    .catch(console.log)

    // get the players of the team
    this._playerService.show()
    .then(players => {
      this.players = players
      console.log(players)
    })

    
  }

  OnSubmit(form){
    this.game.game = form.value.game;

    this._gameService.createGames(this.game)
  }

  getGameandRsvp(id){

  }

  createGame(id){
    this._gameService.gameSubject.subscribe(
      games => {
        this.games = games
        console.log(this.games)
      }
    );

    this._playerService.show()
    .then(players => {
      this.players = players
      console.log(players)
    })

    for (var index = 0; index < this.players.length; index++) {
      this.rsvp.game = id
      this.rsvp.player = this.players[index]
      this.rsvp.status = 0
      this._rsvpService.createRsvps(this.rsvp)
    }

    this._rsvpService.getRsvps()
    .then(rsvps => console.log(rsvps))
    .catch(console.log)
  }

  setPlaying(rsvptoUpdate){
    let rsvptoUpdated = {
      id: rsvptoUpdate._id,
      game: rsvptoUpdate.game,
      player: rsvptoUpdate.player._id,
      status: 0
    }
    this._rsvpService.updateRsvps(rsvptoUpdated).
    then(response => console.log(response))
  }

  setNotPlaying(rsvptoUpdate){
    let rsvptoUpdated = {
      id: rsvptoUpdate._id,
      game: rsvptoUpdate.game,
      player: rsvptoUpdate.player._id,
      status: 1
    }
    this._rsvpService.updateRsvps(rsvptoUpdated).
    then(response => console.log(response))
  }

  setUndecided(rsvptoUpdate){
    let rsvptoUpdated = {
      id: rsvptoUpdate._id,
      game: rsvptoUpdate.game,
      player: rsvptoUpdate.player._id,
      status: 2
    }
    this._rsvpService.updateRsvps(rsvptoUpdated).
    then(response => console.log(response))
  }

}
