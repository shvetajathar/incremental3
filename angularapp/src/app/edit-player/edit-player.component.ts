import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from '../services/team-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IPlayer } from '../model/iplayer';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  constructor(private ms : TeamServiceService, private ar : ActivatedRoute, private router : Router) { }

  playerdetail : IPlayer = {id : 0, teamid : 0, name : '', age : 0, category : '', biddingprice : 0}
  id : number
  showdata : any[] = []

  ngOnInit() {
    const tid = this.ar.snapshot.paramMap.get('id')
    this.id = Number(tid)
    this.getPlayer(this.id)
    this.ms.getTeams().subscribe(data => {this.showdata.push(...data)})
  }

  getPlayer(id : number) {
    this.ms.getOnePlayer(id).subscribe((data : IPlayer) =>
      this.playerdetail = data
    )
  }

  saveData(movie : IPlayer) : void {
    this.playerdetail = movie
    this.ms.EditPlayer(this.playerdetail).subscribe(() => {
      alert("Data Edited")
      this.router.navigate(['/listteams'])
    })
  }

}
