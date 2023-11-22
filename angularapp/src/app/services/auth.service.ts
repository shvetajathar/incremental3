import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {of} from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url  = 'https://8080-aebcdfaefacffabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/Movie';
 
  constructor(private httpclient : HttpClient) { }  
  login(username : string, password:string) : Observable<{role : string}>{
    return of ({role : 'ADMIN'});
  }
 
}