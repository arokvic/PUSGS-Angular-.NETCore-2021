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


    basicInfo!:FormGroup
  IncForm!: FormGroup;
  ngOnInit(): void {
    this.basicInfo = this.rootFormGroup.control.get('basicInfo') as FormGroup;
  }

  save(){
    
      console.log("tu sam, saljem poruku na navbar");
      this.wrService.sendMessage(2);
      this.router.navigate(['/incidents/new/resolution']);
    
  

  }

}
