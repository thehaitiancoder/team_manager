import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { PlayerService } from '../services/player.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  player = new Player()

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit() {
  }

  OnSubmit(event: Event, form){
    event.preventDefault();
    this.player.name = form.value.name;
    this.player.pref_position = form.value.pref_position;

    this.playerService.create(this.player)
    this.router.navigate(['players', 'list']);
  }

}
