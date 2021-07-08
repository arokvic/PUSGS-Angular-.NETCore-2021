import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { SwpInteractionService } from 'src/app/services/switching-plan/swp-interaction.service';
//import { SwitchingPlan } from 'src/app/entities/switchingPlan';
//import { DocumentService } from 'src/app/services/document/document.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WrInteractionService } from 'src/app/services/wr-interaction.service';
import { WorkRequest } from 'src/app/entities/workRequest';
import { DocumentWrService } from 'src/app/services/document-wr.service';

@Component({
  selector: 'app-navbar-wr',
  templateUrl: './navbar-wr.component.html',
  styleUrls: ['./navbar-wr.component.css']
})
export class NavbarWrComponent implements OnInit {
  wrForm!: FormGroup;
  activeId = 1;
  documentId: number = -1;
  workRequest!:WorkRequest;

  constructor(private http: HttpClient, private fb: FormBuilder, private wrService: WrInteractionService, private documentService: DocumentWrService) { }

  ngOnInit(): void {
    this.wrService.currentActiveId$
      .subscribe(
        message => {
          console.log('NavBarId: ' + message);
          this.activeId = message;
        }
      );


    this.wrForm = this.fb.group({
      basicInfo: this.fb.group({
        id: [],
        type: ['', [Validators.required]],
        workRequest: [],
        status: 'Draft',
        incident: [],
        street: ['', [Validators.required]],
        startDate: ['', [Validators.required]],
        endDate: ['', [Validators.required]],
        crew: [],
        createdBy: localStorage.getItem('username'),
        notes: [],
        company: ['', [Validators.required]],
        phoneNo: ['', [Validators.required]],
        dateCreated: []
      }),
      historyState: this.fb.group({
        dateChange: [],
        changedBy: [],
        newStatus: [],
      }),
      multimedia: this.fb.group({
        imageData: []
      }),
      equipment: this.fb.group({
        equipmentId: []
      })
    })
    console.log('DocId: ' + this.wrService.getIdValue());

    this.documentId = this.wrService.getIdValue();

    if(this.documentId != null){
      console.log('Popunjena forma')
      this.http.get("https://localhost:44364/api/DocumentWr/GetWorkRequest?id="+this.documentId).subscribe(
        data => {
          this.workRequest = data as WorkRequest;

          this.wrForm.setValue({
            basicInfo: {
              id: this.workRequest.id,
              type: this.workRequest.type,
              status: this.workRequest.status,
              incident: this.workRequest.incident,
              street: this.workRequest.street,
              startDate: this.workRequest.startDate,
              endDate: this.workRequest.endDate,
              crew: this.workRequest.crew,
              createdBy: this.workRequest.createdBy,
              notes: this.workRequest.notes,
              company: this.workRequest.company,
              phoneNo: this.workRequest.phone,
              dateCreated: this.workRequest.dateCreated
            },
            historyState: {
              dateChange: [],
              changedBy: [],
              newStatus: [],
            },
            multimedia: {
              imageData: this.workRequest.imageData
            },
            equipment: {
              equipmentId: this.workRequest.equipment
            }
          })

        }
      )
      console.log(this.workRequest);
    }else{
      console.log('Prazna forma');
    }
    

  }

  updateItem(newId:number){
    console.log("pokusavam");
    this.activeId = newId;
  }

}
