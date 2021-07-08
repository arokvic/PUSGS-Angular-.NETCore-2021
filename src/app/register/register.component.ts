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
message : any;
progress : any;
fileToUpload: any;
succes!: boolean;

 
@Output() public onUploadFinished = new EventEmitter();

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
    }).subscribe( /*response => {
      const token = (<any>response).token;
      localStorage.setItem("jwt", token);
      const username = (<any>response).username;
      localStorage.setItem("username", username);
      this.invalidLogin = false;
      this.router.navigate(["home"]);
    }, err => {
      this.invalidLogin = true;
    }*/ respones => {
      this.succes = true;

    },err => {
      this.invalidLogin = true;
    });
  }


  ngOnInit(): void {
  }


  public uploadFile = (files:any) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);


    this.http.post('https://localhost:44364/api/User/Upload', formData, {reportProgress: true, observe: 'events'})
    .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
      {
          const total: number = <number>event.total;  
          this.progress = Math.round(100 * event.loaded / total);
      }
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
          console.log(event.body);
          this.imagePath = event.body as {dbPath: ''};
          console.log(this.imagePath);
        }
    });


  }

  handleFileInput(event : Event){

    const element = event.currentTarget as HTMLInputElement;
    let fileList = element.files;
    this.fileToUpload = fileList?.item(0)

    var reader = new FileReader();
    reader.onload = (eventt:any) =>{
      this.imageUrl = eventt.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);




  }




}