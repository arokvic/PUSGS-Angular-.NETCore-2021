import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit { 
  invalidLogin!: boolean;
  
  
  constructor(private router: Router, private http: HttpClient) { }


  public login = (form: NgForm) => {
    const credentials = JSON.stringify(form.value);
    this.http.post("https://localhost:44364/api/User/Login", credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem("jwt", token);
      const username = (<any>response).username;
      localStorage.setItem("username", username);
      const type = (<any>response).type;
      localStorage.setItem("type", type);
      this.invalidLogin = false;
      this.router.navigate([""]);
    }, err => {
      this.invalidLogin = true;
    });
  }

  ngOnInit(): void {
    
  }
}
