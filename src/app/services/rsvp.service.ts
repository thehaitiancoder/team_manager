import { Injectable } from '@angular/core';
import { Rsvp } from '../models/rsvps';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RsvpService {
  base = '/api/rsvps';

  constructor(private _http: Http) {
    this.getRsvps()
  }

  getRsvps(){
    return this._http.get(this.base)
    .map(response => response.json()).toPromise();
  }

  createRsvps(rsvp){
    return this._http.post(this.base, rsvp)
    .map(response => response.json()).toPromise();
  }

  updateRsvps(rsvp){
    return this._http.put(this.base, rsvp)
    .map(response => response.json()).toPromise()
  }

}