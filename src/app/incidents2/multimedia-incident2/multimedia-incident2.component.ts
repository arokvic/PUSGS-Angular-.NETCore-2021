import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Incident } from 'src/app/entities/incident';
import { WrInteractionService } from 'src/app/services/wr-interaction.service';
import { SwpInteractionService } from 'src/app/services/swp-interaction.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-multimedia-incident2',
  templateUrl: './multimedia-incident2.component.html',
  styleUrls: ['./multimedia-incident2.component.css']
})
export class MultimediaIncident2Component implements OnInit {


  image: string = "";
  multimediaForm!:FormGroup;
  progress: any;
  message: any;
  imagePath1!: {dbPath: ''};


  constructor(private rootFormGroup: FormGroupDirective,
     private router:Router, private http:HttpClient,
     private swpService:SwpInteractionService, private wrservice: WrInteractionService) { }

  ngOnInit(): void {
    this.multimediaForm = this.rootFormGroup.control.get('multimediaAtt') as FormGroup;
    this.image = this.multimediaForm.controls.imageData.value;
  }

  save(){
   
     
      this.wrservice.sendMessage(5);
      this.router.navigate(['/incidents/new/crew']);
    
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
          console.log(event.body);
          this.imagePath1 = event.body as {dbPath: ''};
          this.image = this.imagePath1.dbPath.toString();
          this.multimediaForm.value.imageData = this.image;
          console.log("Upload zavrsen" + this.multimediaForm.value.imageData)
          this.multimediaForm.setValue({
              imageData: this.image 
            
          })
        }
    });


  }

  

  imagePath(path:string): string {
    if(!(path == null || path == "")){
      console.log(path);
    const retVal = 'https://localhost:44364/' + path;
    return retVal;
    }else{
      return "";
    }
  }



}
