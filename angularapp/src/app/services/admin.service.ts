import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from 'src/models/team.model';
import { Player } from 'src/models/player.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url="https://8080-beaddfcabfedbecfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin";
  // private url2="https://8080-beaddfcabfedbecfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin/ShowTeams"

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
  createPlayer(playerdata:Player):Observable<Player>
  {
    return this.httpclient.post<Player>(this.url + '/Addplayers',playerdata,this.httpOptions);
  }

  createTeam(teamdata:Team):Observable<Team>
  {
    return this.httpclient.post<Team>(this.url + '/AddTeams',teamdata,this.httpOptions);
  }
  editPlayer(playerdata:Player):Observable<Player>
  {
    return this.httpclient.put<Player>(this.url + '/EditPlayer/' + playerdata.id,playerdata,this.httpOptions);
  }
  getPlayerById(id:number):Observable<Player>
  {
    return this.httpclient.get<Player>(this.url + '/showPlayers/' + )
  }
}
