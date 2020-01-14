import { Component, OnInit } from '@angular/core';
import {GeneralService} from "../_services/general.service";
declare var Modernizr:any;
declare const PACMAN: any;

@Component({ 
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private serve:GeneralService) {

    this.serve.loadPacman();
   }


  ngOnInit() {
    var el = document.getElementById("pacman");

    if (Modernizr.canvas && Modernizr.localstorage && 
        Modernizr.audio && (Modernizr.audio.ogg || Modernizr.audio.mp3)) {
      window.setTimeout(function () { PACMAN.init(el, "./assets/"); }, 0);
    } else { 
      el.innerHTML = "Sorry, needs a decent browser<br /><small>" + 
        "(firefox 3.6+, Chrome 4+, Opera 10+ and Safari 4+)</small>";
    }

  }

}
