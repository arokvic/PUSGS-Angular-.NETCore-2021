import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkRequest } from 'src/app/entities/workRequest';
//import { SwpInteractionService } from 'src/app/services/switching-plan/swp-interaction.service';
import { WrInteractionService } from 'src/app/services/wr-interaction.service';
import {Incident} from 'src/app/entities/incident';
import { Inc1Service } from 'src/app/services/inc1.service';
@Component({
  selector: 'app-basic-inf-wr',
  templateUrl: './basic-inf-wr.component.html',
  styleUrls: ['./basic-inf-wr.component.css']
})
export class BasicInfWrComponent implements OnInit {

  
  form!: FormGroup
  startStatus: string = "Draft";
  userCreatedBy: string = localStorage.getItem("username") || "";
  
  typeF:boolean = false;
  streetF:boolean = false;
  startDateF:boolean = false;
  endDateF:boolean = false;
  companyF:boolean = false;
  phoneF:boolean = false;
  badDate:boolean = false;
  public allIncidents: Incident[] = [];


  constructor(private rootFormGroup: FormGroupDirective, private router:Router, private wrService:WrInteractionService,private  inc : Inc1Service ) { }

  ngOnInit(): void {
    this.inc.getIncidents().subscribe(data=>{
      this.allIncidents = data;
      console.log(this.allIncidents);

    })
    this.form = this.rootFormGroup.control.get('basicInfo') as FormGroup
  }

  

  save(){
    //if(this.validate()){
      //console.log("tu sam, saljem poruku na navbar");
      this.wrService.sendMessage(2);
      //console.log(this.form.controls);
      var workRequest = new WorkRequest(this.form.controls.type?.value, this.form.controls.status?.value, 
        this.form.controls.incident?.value,
        this.form.controls.street?.value, this.form.controls.startDate?.value,
         this.form.controls.endDate?.value, this.form.controls.crew?.value, 
         this.form.controls.createdBy?.value, this.form.controls.notes?.value, this.form.controls.company?.value,
         "064525203", "", this.form.controls.imageData?.toString(), this.form.controls.equipment?.toString());
        localStorage.setItem("wrID", JSON.stringify(workRequest));
      this.router.navigate(['/work-requests/new/history-state']);
      console.log(workRequest);
  //  }
   // else{
      
   // }

  }

  getError():string{
    return "Error";
  }

  validate():boolean {
    let retVal = true;
    if(this.form.controls.type.hasError('required')){
      this.typeF = true;
      retVal = false;
    }else{
      this.typeF = false;
    }
    if(this.form.controls.street.hasError('required')){
      this.streetF = true;
      retVal = false;
    }else{
      this.streetF = false;
    }
    if(this.form.controls.startDate.hasError('required')){
      this.startDateF = true;
      retVal = false;
    }else{
      this.startDateF = false;
    }
    if(this.form.controls.endDate.hasError('required')){
      this.endDateF = true;
      retVal = false;
    }else{
      this.endDateF = false;
    }
    if(this.form.controls.company.hasError('required')){
      this.companyF = true;
      retVal = false;
    }else{
      this.companyF = false;
    }
    
    if(this.form.controls.phoneNo.hasError('required')){
      this.phoneF = true;
      retVal = false;
    }else{
      this.phoneF = false;
    }
    if(!this.startDateF && !this.endDateF){

      let sDate = Date.parse(this.form.controls.startDate.value);
      let eDate = Date.parse(this.form.controls.endDate.value);

      console.log("Uporedjujem: " + sDate+ " i " +eDate);

      if(eDate < sDate){
        this.badDate = true;
        retVal = false;
      }else{
        this.badDate = false;
      }

    }

    return retVal;

  }


}

