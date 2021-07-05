import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-multimedia-attachments',
  templateUrl: './multimedia-attachments.component.html',
  styleUrls: ['./multimedia-attachments.component.css']
})
export class MultimediaAttachmentsComponent implements OnInit {

  multimediaForm = new FormGroup({
    file: new FormControl(''),
    filePath: new FormControl('')
  });

  public component = "multimedia-attachments";
  public toNavbar = [this.multimediaForm, this.component];


  imageUrl="";
  fileToUpload : any;
  progress: any;
  message: any;
  imagePath!: {dbPath: ''};

  @Output() public onUploadFinished = new EventEmitter();

  constructor(private router: Router, private _sharedService: SharedService,private http: HttpClient) { }

  ngOnInit(): void {
  }

  handleFileInput(event : Event){
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
  
      this.fileToUpload = fileList?.item(0)
  
      var reader = new FileReader();
      reader.onload = (eventt:any) =>{
        this.imageUrl = eventt.target.result;
      }
      reader.readAsDataURL(this.fileToUpload);
  
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
          this.multimediaForm.value.filePath = new FormControl(this.imagePath);
          console.log(this.imagePath);
        }
    });
  }

  onSave() {
    //console.log(this.elementForm.value.elementName) 
    //emituj vrijednost u roditeljsku komponentu(NAVBAR)
    
    //prebaci na sledeca polja

    this._sharedService.emitChange(this.toNavbar);
    this.router.navigate(['/safety-documents/new/document-devices']);
  }


}
