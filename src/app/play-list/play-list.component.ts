import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Player } from '../models/player';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {

  players: Array<Player> = []
  subscription: Subscription;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.show()
    .then(players => this.players = players)
  }

  deletePlayer(id){
    this.playerService.delete(id)
    .then(response => console.log("Player deleted"))
  }

}
