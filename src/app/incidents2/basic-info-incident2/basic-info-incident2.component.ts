import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Incident } from 'src/app/entities/incident';
import { WrInteractionService } from 'src/app/services/wr-interaction.service';
import { SwpInteractionService } from 'src/app/services/swp-interaction.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-basic-info-incident2',
  templateUrl: './basic-info-incident2.component.html',
  styleUrls: ['./basic-info-incident2.component.css']
})
export class BasicInfoIncident2Component implements OnInit {

  constructor(private fb: FormBuilder, private wrService: WrInteractionService,
    private rootFormGroup: FormGroupDirective,
    private router:Router
    ,private swp:SwpInteractionService) { }

    typeF:boolean = false;
    priorityF:boolean = false;
    startDateF:boolean = false;
    statusF:boolean = false;
    confirmedF:boolean = false;
    etaF:boolean = false;
    ataF:boolean = false;
    etrF:boolean = false;
    outageTimeF:boolean = false;
    createdByF:boolean = false;
    callsF:boolean = false;
    affectedCustomersF:boolean = false;
    voltageLevelF:boolean = false;
    scheduledTimeF:boolean = false;
    assignedToF:boolean = false;

    


    basicInfo!:FormGroup
  IncForm!: FormGroup;
  ngOnInit(): void {
    this.basicInfo = this.rootFormGroup.control.get('basicInfo') as FormGroup;
  }

  save(){
    
      if (this.validate()){
      console.log("tu sam, saljem poruku na navbar");
      this.wrService.sendMessage(2);
      this.router.navigate(['/incidents/new/resolution']);
      }
  

  }


  validate():boolean {
    let retVal = true;
    if(this.basicInfo.controls.typeOfInc.hasError('required')){
      this.typeF = true;
      retVal = false;
    }else{
      this.typeF = false;
    }
    if(this.basicInfo.controls.priority.hasError('required')){
      this.priorityF = true;
      retVal = false;
    }else{
      this.priorityF = false;
    }
    if(this.basicInfo.controls.status.hasError('required')){
      this.statusF = true;
      retVal = false;
    }else{
      this.statusF = false;
    }
    if(this.basicInfo.controls.confirmed.hasError('required')){
      this.confirmedF = true;
      retVal = false;
    }else{
      this.confirmedF = false;
    }
    if(this.basicInfo.controls.etr.hasError('required')){
      this.etrF = true;
      retVal = false;
    }else{
      this.etrF = false;
    }
    if(this.basicInfo.controls.eta.hasError('required')){
      this.etaF = true;
      retVal = false;
    }else{
      this.etaF = false;
    }
    if(this.basicInfo.controls.ata.hasError('required')){
      this.ataF = true;
      retVal = false;
    }else{
      this.ataF = false;
    }
  
    if(this.basicInfo.controls.outageTime.hasError('required')){
      this.outageTimeF = true;
      retVal = false;
    }else{
      this.outageTimeF = false;
    }
    if(this.basicInfo.controls.createdBy.hasError('required')){
      this.createdByF = true;
      retVal = false;
    }else{
      this.createdByF = false;
    }
    if(this.basicInfo.controls.affectedCustomers.hasError('required')){
      this.affectedCustomersF = true;
      retVal = false;
    }else{
      this.affectedCustomersF = false;
    }
    if(this.basicInfo.controls.calls.hasError('required')){
      this.callsF = true;
      retVal = false;
    }else{
      this.callsF = false;
    }
    if(this.basicInfo.controls.voltageLevel.hasError('required')){
      this.voltageLevelF = true;
      retVal = false;
    }else{
      this.voltageLevelF = false;
    }
    if(this.basicInfo.controls.scheduledTime.hasError('required')){
      this.scheduledTimeF = true;
      retVal = false;
    }else{
      this.scheduledTimeF = false;
    }
    if(this.basicInfo.controls.assignedTo.hasError('required')){
      this.assignedToF = true;
      retVal = false;
    }else{
      this.assignedToF = false;
    }
    
    

    return retVal;

  }

}
