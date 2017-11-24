import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PlayerService } from './services/player.service';
import { GameService } from './services/game.service';
import { RsvpService } from './services/rsvp.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayListComponent } from './play-list/play-list.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayListComponent,
    AddPlayerComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    PlayerService,
    GameService,
    RsvpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
