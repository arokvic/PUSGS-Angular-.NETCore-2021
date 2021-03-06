import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { DocumentService } from '../services/document.service';
import { SwitchingPlan } from '../entities/switchingPlan';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {
  basicInfoForm = new FormGroup({
    elementType: new FormControl(''),
    status: new FormControl('Draft'),
    switchingPlan: new FormControl('plan-id'),
    //safetyDocType: new FormControl(''),
    dateCreated: new FormControl(new Date().toLocaleDateString()),
    createdByUser: new FormControl(localStorage.username),
    phoneNum: new FormControl(''),
    fieldCrew: new FormControl('crew-id'),
    details: new FormControl(''),
    notes: new FormControl(''),
    
  });

  public userCreated = "";
  public component = "basic-info";
  public toNavbar = [this.basicInfoForm, this.component];
  public allSp: SwitchingPlan[] = [];

  constructor(private router: Router, private _sharedService: SharedService, private docService : DocumentService) { }

  ngOnInit(): void {

    this.docService.getSwitchingPlans().subscribe(data=> {
      this.allSp = data;
      console.log(this.allSp);


    })

     console.log(localStorage.username);
    this.userCreated = localStorage.username;
    
  }
  onSave() {
    //console.log(this.elementForm.value.elementName) 
    //emituj vrijednost u roditeljsku komponentu(NAVBAR)
    
    //prebaci na sledeca polja

    this._sharedService.emitChange(this.toNavbar);
    this.router.navigate(['/safety-documents/new/history-of-state-changes']);
  }
}
