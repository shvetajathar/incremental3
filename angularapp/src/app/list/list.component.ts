import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  playerdata:(any[])=[]

  constructor(private ad:AdminService) {
    this.ad.getPlayers().subscribe(data=>{this.playerdata.push(...data)});
   }

  ngOnInit(): void {
  }

}
