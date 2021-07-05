import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SafetyDocument } from '../entities/safety-document';
import { SafetyDocumentsService } from '../services/safety-documents.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public currentTab = "";
  public activeId = 1;
  safetyDocument: SafetyDocument;
  allSafetyDocuments: SafetyDocument[] = [];
  
  constructor(private router: Router, private _sharedService: SharedService, private _safetyDocumentsService: SafetyDocumentsService) {
    this.safetyDocument = new SafetyDocument();
    
    _sharedService.changeEmitted$.subscribe(  //kad na Basic information kliknem SAVE -> ovdje udjem. 
      text => {
          console.log(text[0].value, text[1]);
          if (text[1] === 'basic-info')
          {
            console.log("basic infoo usao sam ovdje oo");
            //prebaciti u servis
            this.safetyDocument = new SafetyDocument("id", text[0].value.elementType, text[0].value.status,
                                                     text[0].value.switchingPlan, "sejftidoktajp",
                                                     text[0].value.dateCreated, text[0].value.createdByUser,
                                                     text[0].value.phoneNum, text[0].value.fieldCrew,
                                                     text[0].value.details, text[0].value.notes
                                                     
                                                    );
            console.log(JSON.stringify(this.safetyDocument) + "ovo je sejfti")
          }
          if (text[1] === 'history-of-state-changes')
          {
           
            //prebaciti u servis
            this.safetyDocument.newState = text[0].value.newStatus;
            this.safetyDocument.usersThatChangedDocument = text[0].value.usersThatModified;

            console.log(JSON.stringify(this.safetyDocument) + "ovo je sa historijem")
          }
          if (text[1] === 'multimedia-attachments')
          {
           
            //prebaciti u servis
            this.safetyDocument.file = text[0].value.filePath.value.dbPath;

            console.log(JSON.stringify(this.safetyDocument) + "ovo je sa img")
          }
          if (text[1] === 'devices')
          {
           
            //prebaciti u servis
            this.safetyDocument.devicesSelected = text[0].value.devicesSelected.value;

            console.log(JSON.stringify(this.safetyDocument) + "ovo je sa devices");
          }
          if (text[1] === 'checklist')
          {
           
            //prebaciti u servis
            //dodati polja u entity
            this.safetyDocument.operationsCompleted = text[0].value.operationsCompleted;
            this.safetyDocument.tagsRemoved = text[0].value.tagsRemoved;
            this.safetyDocument.groundingRemoved = text[0].value.groundingRemoved;
            this.safetyDocument.readyForService = text[0].value.readyForService;


            //send to backend

            /*let sdTest = new SafetyDocument("id", "tip", "status", "plan", "doctype", "datecreated", "by", "numb", "fieldcr", "det",
              "notes", "novost", "usersthatchang", "file", "devsel", true, false, false, true);*/
            this._safetyDocumentsService.saveSafetyDocument(this.safetyDocument);


            console.log(JSON.stringify(this.safetyDocument) + "FIN VERZ---------------");
          }
          


          //ovdje if ako je zadnje polje onda nakon cuvanja tog zadnjeg polja sacuvati u bazu sve (POST)

      });

   }

  ngOnInit(): void {
    
    this.router.events.subscribe(event =>{
      if (event instanceof NavigationStart){
         
         this.routerChangeMethod(event.url);
         
      }
   })
  }

  routerChangeMethod(url : any){
    let urlSplit = url.split("/");
    this.currentTab =urlSplit[3];
    //console.log(this.currentTab);

    if (this.currentTab === 'basic-info')
    {
      this.activeId = 1;
      //console.log(this.activeId);
    } 
    if (this.currentTab === 'history-of-state-changes')
    {
      this.activeId = 2;
      //console.log(this.activeId);
    }
    if (this.currentTab === 'multimedia-attachments')
    {
      this.activeId = 3;
      //console.log(this.activeId);
    }
    if (this.currentTab === 'document-devices')
    {
      this.activeId = 4;
      //console.log(this.activeId);
    }
    if (this.currentTab === 'checklist')
    {
      this.activeId = 5;
      //console.log(this.activeId);
    }

  }


  

}
