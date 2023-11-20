import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
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
  // getTeams():Observable<any[]>
  // {
  //   return this.httpclient.get<any[]>(this.url + '/ShowTeams');
  // }
}
