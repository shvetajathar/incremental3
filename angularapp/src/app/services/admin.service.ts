import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from 'src/models/team.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url="https://8080-beaddfcabfedbecfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin";

  constructor(private httpclient:HttpClient) { }

  getPlayers():Observable<any[]>
  {
    return this.httpclient.get<any[]>(this.url + '/showPlayers');
    
  }
  getTeams():Observable<any[]>
  {
    return this.httpclient.get<any[]>(this.url + '/ShowTeams');
  }

  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}

  createTeam(newTeam:Team):Observable<Team>
  {
    return this.httpclient.post<Team>(this.url + '/AddTeams',newTeam,this.httpOptions);
  }
}
