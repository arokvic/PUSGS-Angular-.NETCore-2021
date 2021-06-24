import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../entities/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) { }

  logOut(): void {
  
    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
    localStorage.removeItem("type");
    this.router.navigate(["home"]);
  
  }
}
