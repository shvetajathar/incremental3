import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/models/player.model';
@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  playerdata:Player={id:0,teamid:0,name:'',age:0,category:'',biddingPrice:0}

  constructor(private ad:AdminService,private route:Router,private activatedroute:ActivatedRoute) { 
  }
  saveData(player:Player):void{
    this.playerdata=player;
    this.ad.createPlayer(this.playerdata).subscribe(
      ()=>{
        alert('Reacord added');
        this.route.navigate(['/showPlayers']);
      }
    )



  }

  ngOnInit(): void {
  }

}
