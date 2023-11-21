import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { ListComponent } from './list/list.component';
import { ListTeamComponent } from './list-team/list-team.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';

const routes: Routes = [
  {path:'showPlayers',component:ListComponent},
  {path:'ShowTeams',component:ListTeamComponent},
  {path:'AddPlayers',component:AddPlayerComponent},
  {path:'AddTeams',component:AddTeamComponent},
  {path:'editPlayer/:id',component:EditPlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
