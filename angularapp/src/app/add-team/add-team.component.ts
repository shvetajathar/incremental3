import { Component, OnInit } from '@angular/core';
import { ITeam } from '../model/iteam';
import { TeamServiceService } from '../services/team-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  teamdetail : ITeam = {teamId : 0, teamName : '', maxixmunBudget : 0}
  showdata : any[] = []

  constructor(private ms : TeamServiceService, private router : Router, private ar : ActivatedRoute) { }

  saveData(team : ITeam) : void {
    this.teamdetail = team
    this.ms.AddTeam(this.teamdetail).subscribe(() => {
      alert("Detail Added")
      this.router.navigate(['/listteams'])
    }
    )
  }

  ngOnInit() {

    this.ms.getTeams().subscribe(data => {this.showdata.push(...data)})

  }

}
