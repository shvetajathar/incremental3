import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/models/team.model';
@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  teamdata={teamid:0,teamname:''};

  constructor(private ad:AdminService,private route:Router,private ac:ActivatedRoute) { }
  saveData(team:Team):void{
    this.teamdata=team;
    this.ad.createTeam(this.teamdata).subscribe(
      ()=>{
        alert('Team added');
        this.route.navigate(['/ShowTeams']);

      }
    )


  }

  ngOnInit(): void {
  }

}
