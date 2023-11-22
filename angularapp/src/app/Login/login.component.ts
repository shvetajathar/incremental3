import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormsModule, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string;
  password : string;


  constructor(private ls : AuthService, private route :Router, private fm : FormGroup) { }
  // this.fm.group(
  //   username : "Username Required", Validators.required
  // )
  login(){
    this.ls.login(this.username,this.password).subscribe();
  }
 
  ngOnInit(): void {

  }
 
}