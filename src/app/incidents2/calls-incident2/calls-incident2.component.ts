import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Incident } from 'src/app/entities/incident';
import { WrInteractionService } from 'src/app/services/wr-interaction.service';
import { SwpInteractionService } from 'src/app/services/swp-interaction.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-calls-incident2',
  templateUrl: './calls-incident2.component.html',
  styleUrls: ['./calls-incident2.component.css']
})
export class CallsIncident2Component implements OnInit {

  constructor(private fb: FormBuilder,
    private wrservice: WrInteractionService,private rootFormGroup: FormGroupDirective,
   private router:Router
   ,private swp:SwpInteractionService) { }

   callsForm!:FormGroup
  ngOnInit(): void {
    this.callsForm = this.rootFormGroup.control.get('calls') as FormGroup;
  }

  save(){

   // console.log(this.basicform.controls.typeOfInc.value + this.basicform.controls.Id.value);
   // console.log(this.resolutionForm.controls.cause.value + this.basicform.controls.subcause.value);

    this.wrservice.sendMessage(4);
    this.router.navigate(['/incidents/new/multimedia']);

  }

}
