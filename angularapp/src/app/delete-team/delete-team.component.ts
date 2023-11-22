import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from '../services/team-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ITeam } from '../model/iteam';

@Component({
  selector: 'app-delete-team',
  templateUrl: './delete-team.component.html',
  styleUrls: ['./delete-team.component.css']
})
export class DeleteTeamComponent implements OnInit {

  constructor(private ms : TeamServiceService, private ar: ActivatedRoute, private router : Router) { }

  id : number
  teamdetail : ITeam = {teamId : 0, teamName : '', maxixmunBudget : 0}

  ngOnInit() {
    const tid = this.ar.snapshot.paramMap.get('id')
    this.id = Number(tid)
    this.getTeam(this.id)
  }

  getTeam(id : number) {
    this.ms.getTeam(id).subscribe((data : ITeam) => 
      this.teamdetail = data
    )
  }

  saveData(team : ITeam) : void {
    this.teamdetail = team
    this.ms.DeleteTeam(this.teamdetail).subscribe(() => {
      alert("Record Deleted")
      this.router.navigate(['/listteams'])
    })
  }

}
