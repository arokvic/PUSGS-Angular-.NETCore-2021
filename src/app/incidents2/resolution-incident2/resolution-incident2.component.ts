import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Incident } from 'src/app/entities/incident';
import { WrInteractionService } from 'src/app/services/wr-interaction.service';
import { SwpInteractionService } from 'src/app/services/swp-interaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resolution-incident2',
  templateUrl: './resolution-incident2.component.html',
  styleUrls: ['./resolution-incident2.component.css']
})
export class ResolutionIncident2Component implements OnInit {

  constructor(private fb: FormBuilder,
     private wrservice: WrInteractionService,private rootFormGroup: FormGroupDirective,
    private router:Router
    ,private swp:SwpInteractionService) { }


    causeF:boolean = false;
    subcauseF:boolean = false;
    constTypeF:boolean = false;
    materialF:boolean = false;
    resolutionForm!:FormGroup

  ngOnInit(): void {
    this.resolutionForm = this.rootFormGroup.control.get('resolution') as FormGroup;
  }

  save(){

    if (this.validate()){
    console.log(this.resolutionForm.controls.cause);
    this.wrservice.sendMessage(3);
    this.router.navigate(['/incidents/new/calls']);
    }

  }


  validate():boolean {
    let retVal = true;
    if(this.resolutionForm.controls.cause.hasError('required')){
      this.causeF = true;
      retVal = false;
    }else{
      this.causeF = false;
    }
    if(this.resolutionForm.controls.subcause.hasError('required')){
      this.subcauseF = true;
      retVal = false;
    }else{
      this.subcauseF = false;
    }
    if(this.resolutionForm.controls.constructionType.hasError('required')){
      this.constTypeF = true;
      retVal = false;
    }else{
      this.constTypeF = false;
    }
    if(this.resolutionForm.controls.material.hasError('required')){
      this.materialF = true;
      retVal = false;
    }else{
      this.materialF = false;
    }
  
  
    return retVal;
  
  }
}
