import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

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
