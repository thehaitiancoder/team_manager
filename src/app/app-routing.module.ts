import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayListComponent } from './play-list/play-list.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { GameComponent } from './game/game.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'players/list',
    pathMatch: 'full'
  },
  {
    path: 'players/list',
    component: PlayListComponent
  },
  {
    path: 'players/addplayer',
    component: AddPlayerComponent
  },
  {
    path: 'status/game',
    component: GameComponent,
    children: [
      {path: '', redirectTo: '1', pathMatch: 'full'},
      {path: '1', component: GameComponent},
      {path: '2', component: GameComponent},
      {path: '3', component: GameComponent}
    ]
  },
  {
    path: '**',
    component: PlayListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
