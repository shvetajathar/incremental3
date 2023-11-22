import { Component, IterableDiffers, OnInit } from '@angular/core';
import { TeamServiceService } from '../services/team-service.service';
import { ITeam } from '../model/iteam';

@Component({
  selector: 'app-list-teams',
  templateUrl: './list-teams.component.html',
  styleUrls: ['./list-teams.component.css']
})
export class ListTeamsComponent implements OnInit {

  teamdata : ITeam[] = []

  constructor(private ms : TeamServiceService) {
      this.ms.getTeams().subscribe(data => {this.teamdata.push(...data)})
      console.log(this.teamdata)
  }

  ngOnInit(): void {
  }

}
