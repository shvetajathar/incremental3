import { Component, OnInit } from '@angular/core';
import { IPlayer } from '../model/iplayer';
import { TeamServiceService } from '../services/team-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  playerdetail : IPlayer = {id : 0, teamid : 0, name : '', age : 0, category : '', biddingprice : 0}
  showdata : any[] = []

  constructor(private ms : TeamServiceService, private router : Router, private ar : ActivatedRoute) { }

  saveData(player : IPlayer) : void {
    this.playerdetail = player
    this.ms.AddPlayer(this.playerdetail).subscribe(() => {
      alert("Detail Added")
      this.router.navigate(['/listplayer'])
    }
    )
  }

  ngOnInit() {

    this.ms.getTeams().subscribe(data => {this.showdata.push(...data)})

  }

}
