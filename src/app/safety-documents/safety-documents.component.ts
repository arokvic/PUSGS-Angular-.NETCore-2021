import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { SafetyDocument } from '../entities/safety-document';
import { SafetyDocumentsService } from '../services//safety-documents.service';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-safety-documents',
  templateUrl: './safety-documents.component.html',
  styleUrls: ['./safety-documents.component.css']
})
export class SafetyDocumentsComponent implements OnInit {
  public displaySafetyDocumentContent = true;
  public allSafetyDocuments: SafetyDocument[] = [];

  public page = 10;
  public pageSize = 3;
  
  

  constructor(private navigationService: NavigationService, private cdref: ChangeDetectorRef, private _safetyDocumentsService: SafetyDocumentsService) { }

  ngOnInit(): void {
    this._safetyDocumentsService.loadSafetyDocuments()
                                .subscribe(data => this.allSafetyDocuments = data);

  }

  ngAfterContentChecked() {

    this.onGetDisplayContent();
    this.cdref.detectChanges();
    
  }


  onGetDisplayContent(){
    //console.log("kliknuo");
    this.navigationService.navigation$.subscribe((isreached)=>{
      if(isreached){
         this.displaySafetyDocumentContent = false;
         //console.log('isreached je true i emitovao sam observable')
      } else 
      {
        this.displaySafetyDocumentContent = true;
        //
        this._safetyDocumentsService.loadSafetyDocuments()
                                .subscribe(data => this.allSafetyDocuments = data);

      }
    });
  }
 
}
