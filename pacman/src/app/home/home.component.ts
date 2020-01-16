import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';


declare const PACMAN: any;

@Component({ 
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private http: HttpClient, private auth: AuthService) {

   }


  ngOnInit() {

  }

  logout() {
    this.auth.token = '';
    window.location.replace ("/");
    //window.history.back();
   
 
}
}
