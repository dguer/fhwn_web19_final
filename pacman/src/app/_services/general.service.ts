import { Injectable } from '@angular/core';
const pacman = './assets/app.js';
const modernize = './assets/modernizr-1.5.min.js';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {


  loadAPI: Promise<any>;
  constructor() {
      this.loadPacman();
    }

public loadPacman(){

  console.log('Script pacman');

    let node = document.createElement('script');
    node.src = pacman;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
    this.loadModer();
}

public loadModer(){

  console.log('Script pacman');

    let node = document.createElement('script');
    node.src = modernize;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
}
}
