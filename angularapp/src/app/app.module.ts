import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTeamsComponent } from './list-teams/list-teams.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Login/login.component';
import { HomeComponent } from './home/home.component';
import { FindTeamComponent } from './find-team/find-team.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { DeleteTeamComponent } from './delete-team/delete-team.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { ListPlayerComponent } from './list-player/list-player.component';
import { DeletePlayerComponent } from './delete-player/delete-player.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTeamsComponent,
    LoginComponent,
    HomeComponent,
    FindTeamComponent,
    AddPlayerComponent,
    AddTeamComponent,
    EditTeamComponent,
    DeleteTeamComponent,
    EditPlayerComponent,
    ListPlayerComponent,
    DeletePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
