import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Incident } from 'src/app/entities/incident';
import { WrInteractionService } from 'src/app/services/wr-interaction.service';
import { SwpInteractionService } from 'src/app/services/swp-interaction.service';
import { Router } from '@angular/router';
import { Crew } from 'src/app/entities/crew';
import { CrewService } from 'src/app/services/crew.service';

@Component({
  selector: 'app-crew-incident2',
  templateUrl: './crew-incident2.component.html',
  styleUrls: ['./crew-incident2.component.css']
})
export class CrewIncident2Component implements OnInit {

  crewsForm!:FormGroup
  allCrews:Crew[] = [];
  constructor(private fb: FormBuilder,
    private wrservice: WrInteractionService,private rootFormGroup: FormGroupDirective,
   private router:Router
   ,private swp:SwpInteractionService, private crewService : CrewService) { }

  ngOnInit(): void {
    this.crewsForm = this.rootFormGroup.control.get('crew') as FormGroup;
    this.crewService.loadlCrews().subscribe(data =>
      this.allCrews = data
      );
      console.log(this.allCrews.length);
      
  }


  SelectCrew(name : string){
   this.crewsForm.controls['crewId'].setValue(name);
   

  }

  Save(){

    this.wrservice.sendMessage(6);
    this.router.navigate(['/incidents/new/equipment']);


  }
}
