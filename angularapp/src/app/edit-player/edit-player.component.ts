import { Component, OnInit } from '@angular/core';
import { Player } from 'src/models/player.model';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  playerdata:Player={id:0,teamid:0,name:'',age:0,category:'',biddingPrice:0};
  id:number
  constructor(private ad:AdminService,private route:Router,private ac:ActivatedRoute) { }

  ngOnInit(): void {
    const tid=this.ac.snapshot.paramMap.get('id');
    this.id=Number(tid);
    this.getPlayer(this.id);

  }
  getPlayer(id:number){
    return this.ad.getPlayer(id).subscribe((data:Player)=>this.playerdata=data);

  }
  saveData(player:Player)
  {
    this.playerdata=player;
    this.ad.editPlayer(this.playerdata).subscribe(()=>
    {
      alert('Record Edited');
      this.route.navigate(['/showPlayers']);
    })
  }

}
