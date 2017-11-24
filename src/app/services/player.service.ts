import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlayerService {
  base = '/api/players'

  constructor(private http: Http) { }

  create(player: Player){
    return this.http.post(this.base, player)
    .map(response => response.json()).toPromise();
  }

  show(){
    return this.http.get(this.base)
    .map(response => response.json()).toPromise();
  }

  delete(id){
    return this.http.delete(`${this.base}/${id}`)
    .map(response => response.json()).toPromise();
  }

  showOne(){
    return this.http.get(this.base)
    .map(response => response.json()).toPromise
  }

}
