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
  loadUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>("https://localhost:44364/api/User")
  }
  activateUser(username:string) {
    const params = new HttpParams().append('username',username);
   
    this.http.put("https://localhost:44364/api/User/Verification",null,{params: params})
    .subscribe(
      error=>console.log('oops',error)
    );
  
    return;
  }
  declineUsers(username:string) {
    const params = new HttpParams().append('username',username);
    this.http.put("https://localhost:44364/api/User/Declineverification",null,{params: params})
    .subscribe(
      error=>console.log('oops',error)
    );
  
    return;
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

  loadUserRequests(): Observable<any>{
    return this.http.get<any>("https://localhost:44364/api/User/UserRequests")
  }
  
  confirmUserRequest(username:string) {
    const params = new HttpParams().append('username',username);
   
    this.http.put("https://localhost:44364/api/User/UserRequest",null,{params: params})
    .subscribe(
      error=>console.log('oops',error)
    );
  }

  changeUserPassword(credentials:any){
    const params = new HttpParams().append('password', credentials.password);
    console.log("kod metode" + credentials);
    this.http.put("https://localhost:44364/api/User/ChangePassword", credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })})
      .subscribe(
        error => console.log('oops', error)
      );
  }

  AllWorkers(): Observable<User[]>{
    return this.http.get<User[]>("https://localhost:44364/api/User/AllWorkers")
  }


  GetPendingUsers() : Observable<User[]>{

    return this.http.get<User[]>("https://localhost:44364/api/User/UsersToBeVerified")    
  }

  acceptUser(username:string) {
    const params = new HttpParams().append('username',username);
   
    this.http.put("https://localhost:44364/api/User/Accept",null,{params: params})
    .subscribe(
     error => console.log(error)
    );
  
    return;
  }
  declineUser(username:string) {
    const params = new HttpParams().append('username',username);
    this.http.put("https://localhost:44364/api/User/Decline",null,{params: params})
    .subscribe(
      error => console.log(error)
    );
  
    return;
  }


}

export interface IUser{
  username: string;
  password: string;
  nameAndLastname: string;
  birthDate: string;
  address: string;
  imageData: any;
  email: string;
  userType: string;
  notifications: Array<Notification>;
  activeStatus: string;
}
