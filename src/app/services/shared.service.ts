import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private isLogged = false;
  constructor() { }

  login(){
    this.isLogged = true; 
  }

  logout(){
    this.isLogged = false;
  }

  getStatus(){
    return this.isLogged;
  }
}
