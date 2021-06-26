import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../entities/user';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  params: new HttpParams()
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getCurrentUser(): Observable<any> {
    const param = new HttpParams().append('username', localStorage.getItem("username")!);
    httpOptions.params = param;
    return this.http.get("https://localhost:44364/api/User/CurrentUser", httpOptions);
  }
  changeProfile(user:User){
    console.log(JSON.stringify(user));
    this.http.put<User>("https://localhost:44364/api/User/ChangeProfile", JSON.stringify(user), {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })})
    .subscribe(
      error=>console.log("oops", error)
    );
  }
}
