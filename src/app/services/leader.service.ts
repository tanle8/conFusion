import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from "../shared/leaders"; // To access the LEADERS const variable

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  getLeader(id:number): Leader {
    return LEADERS.filter((leader) => (leader.id === id))[0];
  }

  getFeaturedDish(): Leader {
    return LEADERS.filter((leader) => leader.featured)[0];
  }

  constructor() { }
}
