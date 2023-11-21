import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { ListComponent } from './list/list.component';
import { ListTeamComponent } from './list-team/list-team.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ListComponent,
    ListTeamComponent,
    AddPlayerComponent,
    AddTeamComponent,
    HomeComponent,
    EditPlayerComponent,
    EditTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
