import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SafetyDocument } from '../entities/safety-document';
import { NavigationService } from '../services/navigation.service';
import { SafetyDocumentsService } from '../services/safety-documents.service';

@Component({
  selector: 'app-safety-documents-page',
  templateUrl: './safety-documents-page.component.html',
  styleUrls: ['./safety-documents-page.component.css']
})
export class SafetyDocumentsPageComponent implements OnInit {
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
