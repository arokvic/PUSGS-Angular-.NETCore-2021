import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  logOut(): void {

    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
    localStorage.removeItem("type");
    this.router.navigate([""]);
  
  }
}
