import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Team } from 'src/models/team.model';

@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css']
})
export class ListTeamComponent implements OnInit {
  teamdata:(Team[])=[]

  constructor(private ad:AdminService)  {
    this.ad.getTeams().subscribe(data=>{this.teamdata.push(...data)});
   }

  ngOnInit(): void {
  }

}
