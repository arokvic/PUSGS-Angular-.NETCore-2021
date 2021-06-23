import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../entities/user';
import { UserService } from '../services/user.service';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  userTypes = [
    {name: "TeamMember"},
    {name: "Dispatcher"},
    {name: "Worker"},
    {name: "Admin"}
  ]

  //control!: FormControl;

  progress: any;
  message: any;

  user!:User;

  date!:string;

  image: string = "";

  usernameR:boolean = false;
  fullnameR:boolean = false;
  addressR:boolean = false;
  emailR:boolean = false;
  userTypeR:boolean = false;
  usernameL:boolean = false;
  usernameS:boolean = false;
  usernameW:boolean = false;
  usernameCW:boolean = false;
  emailV:boolean = false;

  profileForm =new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    fullname: new FormControl('', Validators.required), 
    address: new FormControl('', Validators.required),
    userType: new FormControl('', Validators.required),
  });

  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.validate()){
      this.user = new User(
        this.profileForm.controls.username.value,
        this.profileForm.controls.email.value,
        'a',
        this.profileForm.controls.fullname.value,
        this.profileForm.controls.address.value,
        this.date,
      );
      this.userService.changeProfile(this.user);

    }

  }

  validate():boolean{
    let retVal = true;
    if(this.profileForm.controls.username.hasError('required')){
      this.usernameR = true;
      retVal = false;
    }else{
      this.usernameR = false;
    }
    if(this.profileForm.controls.fullname.hasError('required')){
      this.fullnameR = true;
      retVal = false;
    }else{
      this.fullnameR = false;
    }
    if(this.profileForm.controls.address.hasError('required')){
      this.addressR = true;
      retVal = false;
    }else{
      this.addressR = false;
    }
    if(this.profileForm.controls.email.hasError('required')){
      this.emailR = true;
      retVal = false;
    }else{
      this.emailR = false;
    }
    if(this.profileForm.controls.email.hasError('email') && !this.emailR){
      this.emailV = true;
      retVal = false;
    }else{
      this.emailV = false;
    }
    if(this.profileForm.controls.userType.hasError('required')){
      this.userTypeR = true;
      retVal = false;
    }else{
      this.userTypeR = false;
    }
    const str = this.profileForm.controls.username.value;
    const regex = /^$|\s+/
    const invalid = regex.test(str);
    if(regex.test(str) && !this.usernameR){
      this.usernameW = true;
      retVal = false;
    }else{
      this.usernameW = false;
    }
    if(this.profileForm.controls.username.hasError('minlength') && !this.usernameR && !this.usernameW){
      this.usernameS = true;
      retVal = false;
    }else{
      this.usernameS = false;
    }
    if(this.profileForm.controls.username.hasError('maxlength') && !this.usernameW){
      this.usernameL = true;
      retVal = false;
    }else{
      this.usernameL = false;
    }
    
    
    return retVal;
  }

   removeSpaces(control: AbstractControl):any {
    if (control && control.value && !control.value.replace(/\s/g, '').length) {
      control.setValue('');
    }
    return null;
  }
}
