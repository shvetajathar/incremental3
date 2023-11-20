import { Injectable } from '@angular/core';
import { Team } from 'src/models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  creaTeam:Team
  

  constructor() { }
}
