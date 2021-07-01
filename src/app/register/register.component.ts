import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  pass2 = "";
  pass1 = "";
  invalidLogin!: boolean;
  confirmPass=false;
  imagePath!: {dbPath: ''};
  credentials : any;
  profileForm : any;
  imageUrl="/assets/default-user-image.png";
name : any;

 


  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder) { 
    this.profileForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],   
      password2: ['', Validators.required],
        address: ['', Validators.required],
        birth: ['', Validators.required],
        usertype: ['', Validators.required],
        name:['', Validators.required],
        email: ['', Validators.required],
        imagedata: ['', Validators.required],
  
  
      
    });


  }

  public register = (form: NgForm) => {
    if(this.pass1 != this.pass2){
      this.confirmPass=true;
      return;
    }
    
    
    console.log( "eee"+ this.profileForm.value.password);
    console.log( "eee"+ this.profileForm.value.password2);
    console.log( "eee"+ this.profileForm.value.address);
    console.log( "eee"+ this.profileForm.value.birth);
    console.log( "eee"+ this.profileForm.value.name);
    console.log( "eee"+ this.profileForm.value.usertype);



   // this.profileForm.value.imagedata = this.imagePath.dbPath;
     this.credentials = JSON.stringify(this.profileForm.value);

    this.http.post("https://localhost:44364/api/User/Register", this.credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem("jwt", token);
      const username = (<any>response).username;
      localStorage.setItem("username", username);
      this.invalidLogin = false;
      this.router.navigate(["home"]);
    }, err => {
      this.invalidLogin = true;
    });
  }


  ngOnInit(): void {
  }







}