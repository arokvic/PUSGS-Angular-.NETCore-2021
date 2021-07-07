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

    resolutionForm!:FormGroup

  ngOnInit(): void {
    this.resolutionForm = this.rootFormGroup.control.get('resolution') as FormGroup;
  }

  save(){

    console.log(this.resolutionForm.controls.cause);
    this.wrservice.sendMessage(3);
    this.router.navigate(['/incidents/new/calls']);

  }
}
