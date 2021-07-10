import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { SwpInteractionService } from 'src/app/services/swp-interaction.service';
@Component({
  selector: 'app-basic-info-sp',
  templateUrl: './basic-info-sp.component.html',
  styleUrls: ['./basic-info-sp.component.css']
})
export class BasicInfoSpComponent implements OnInit {

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


  constructor(private rootFormGroup: FormGroupDirective, private router:Router, private swpService:SwpInteractionService ) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get('basicInfo') as FormGroup
  }

  

  save(){
    if(this.validate()){
      console.log("tu sam, saljem poruku na navbar");
      this.swpService.sendMessage(2);
      this.router.navigate(['/switching-plans/new/history-state']);
    }
    else{
      
    }

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
