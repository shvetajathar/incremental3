import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITeam } from '../model/iteam';
import { IPlayer } from '../model/iplayer';

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {

  constructor(private httpclient : HttpClient) { }

  private url = 'https://8080-beaddfcabfedbecfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin'


  httpOptions = {headers : new HttpHeaders({'Content-type': 'application/json'})}
  
  getPlayers() : Observable<IPlayer[]> {
    return this.httpclient.get<IPlayer[]>(this.url + '/ListPlayer')
  }
  
  getOnePlayer(id : number) : Observable<IPlayer> {
    return this.httpclient.get<IPlayer>(this.url + '/ListPlayer/' + id)
  }
  
  getPlayer(teamId : number) : Observable<IPlayer[]> {
    return this.httpclient.get<IPlayer[]>(this.url + '/DisplayTeamPlayers/(id)?id=' + teamId)
  }

  AddPlayer(player : IPlayer) : Observable<IPlayer> {
    return this.httpclient.post<IPlayer>(this.url + '/AddPlayer', player, this.httpOptions)
  }

  EditPlayer(player : IPlayer) : Observable<IPlayer> {
    return this.httpclient.put<IPlayer>(this.url + '/EditPlayer/' + player.id, player, this.httpOptions)
  }

  DeletePlayer(player : IPlayer) : Observable<IPlayer> {
    return this.httpclient.delete<IPlayer>(this.url + '/DeletePlayer/' + player.id, this.httpOptions)
  }

  
  
  

  
  getTeams() : Observable<ITeam[]> {
    return this.httpclient.get<ITeam[]>(this.url + '/ListTeam')
  }

  getTeam(id : number) : Observable<ITeam> {
    return this.httpclient.get<ITeam>(this.url + '/ListTeam/' + id)
  }
  

  AddTeam(team : ITeam) : Observable<ITeam> {
    return this.httpclient.post<ITeam>(this.url + '/AddTeam', team, this.httpOptions)
  }

  EditTeam(team : ITeam) : Observable<ITeam> {
    return this.httpclient.put<ITeam>(this.url + '/EditTeam/' + team.teamId, team, this.httpOptions)
  }

  DeleteTeam(team : ITeam) : Observable<ITeam> {
    return this.httpclient.delete<ITeam>(this.url + '/DeleteTeam/' + team.teamId, this.httpOptions)
  }




}
