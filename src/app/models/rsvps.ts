import { Player } from './player';
import {Game } from './games';

export class Rsvp {
    constructor(
        public game: Game = null,
        public player: Player = null,
        public status: number = 0
    ){}
}