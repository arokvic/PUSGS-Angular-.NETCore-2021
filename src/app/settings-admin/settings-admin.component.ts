import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { SettingsService } from '../services/settings.service';
import { Street } from '../entities/street';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-settings-admin',
  templateUrl: './settings-admin.component.html',
  styleUrls: ['./settings-admin.component.css']
})
export class SettingsAdminComponent implements OnInit {

  
  minimumCharacters:boolean = false;
  invalidPassword:boolean = false;

  //Prioriteti za ulice

  streetForm = new FormGroup({
    streetName: new FormControl(''),
    streetPriority: new FormControl(''),
  });

  streets:Street[] = [];
  priorities:number[] = [1, 2, 3, 4, 5];

  //Notifikacije
  options:any = ['All', 'Success', 'Warning', 'Info', 'Error'];
 
  notForm = new FormGroup({
    type: new FormControl('')
  });

  selected:string[] = [];
  select:string = "";
 

  constructor(private router:Router, private http:HttpClient, private userService:UserService, private settingsService:SettingsService) { }

  changePassword(form:NgForm){
    var form1 = form;
    if(this.validate(form)){
    const credentials = JSON.stringify(form1.value);
    this.userService.changeUserPassword(credentials);
    localStorage.clear();
    this.router.navigate(["home"]);
    }
  }

  validate(form:NgForm):boolean{
    const credentials = JSON.stringify(form.value);
    console.log('password: ' + credentials);
    var password = JSON.parse(credentials);
    password = password['password'].toString();
    if(password.length < 5){  //validacija za duzinu sifre
      this.minimumCharacters = true;
      return false;
    }
    if(password.length != password.replace(/\s/g, "").length){  //validacija za razmake
      this.invalidPassword = true;
      return false;
    }
    return true;
  }


  ngOnInit(): void {
    this.settingsService.loadStreets().subscribe
      (data => { this.streets = data
      this.streets = data});
      
    
  }

  onSubmit(){
    console.log(this.streetForm.value);
    this.settingsService.changePriority(new Street(this.streetForm.value.streetName, 0, parseInt(this.streetForm.value.streetPriority)));

  }

  onSubmit2(){
    this.selected = this.notForm.value.type;
    this.select = this.notForm.value.type;

    this.settingsService.visibleNotifications(this.select);

  }

  resetSettings(){
    this.settingsService.resetSettings();
  }

}
