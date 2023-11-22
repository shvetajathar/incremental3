import { Component, OnInit } from '@angular/core';
import { IPlayer } from '../model/iplayer';
import { TeamServiceService } from '../services/team-service.service';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.css']
})
export class ListPlayerComponent implements OnInit {

  playerdata : IPlayer[] = []

  constructor(private ms : TeamServiceService) {
      this.ms.getPlayers().subscribe(data => {this.playerdata.push(...data)})
      console.log(this.playerdata)
  }

  ngOnInit(): void {
  }

}
