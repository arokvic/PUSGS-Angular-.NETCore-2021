import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwitchingPlan } from 'src/app/entities/switchingPlan';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WrInteractionService } from 'src/app/services/wr-interaction.service';
import { NavigationStart, Router } from '@angular/router';
import { Incident } from 'src/app/entities/incident';
@Component({
  selector: 'app-navbar-incident2',
  templateUrl: './navbar-incident2.component.html',
  styleUrls: ['./navbar-incident2.component.css']
})
export class NavbarIncident2Component implements OnInit {

  constructor(private router: Router,private fb: FormBuilder,private wr: WrInteractionService) { }

  IncForm!: FormGroup;
  activeId = 1;
  documentId: number = -1;
  incident!:Incident;

  ngOnInit(): void {
    this.wr.currentActiveId$
      .subscribe(
        message => {
          console.log('NavBarId: ' + message);
          this.activeId = message;
        });

        this.IncForm = this.fb.group({
          basicInfo: this.fb.group({
            id: [],
            typeOfInc: ['', [Validators.required]],
            priority: [],
            status: 'Draft',
            confirmed: ['' , Validators.required],
            eta: ['', [Validators.required]],
            ata: ['', [Validators.required]],
            etr: ['', [Validators.required]],
            outageTime: ['', Validators.required],
            createdBy: localStorage.getItem('username'),
            affectedCustomers: [],
            calls: ['', [Validators.required]],
            voltageLevel: ['', [Validators.required]],
            scheduledTime: ['', Validators.required],
            assignedTo : ['' , Validators.required]
          }),
          devices: this.fb.group({
            deviceId : []
    
          }),
          resolution: this.fb.group({
            cause: ['', Validators.required],
            subcause: ['', Validators.required],
            constructionType: ['', Validators.required],
            material: ['', Validators.required],
    
          }),
          calls: this.fb.group({
            reason: ['', Validators.required],
            comment: ['', Validators.required],
            hazard: ['', Validators.required],
            consumerId : []
            
          }),
          crew: this.fb.group({
            crewId : [''],
            
    
          }),
          multimediaAtt: this.fb.group({
            imageData: []
          }),
          equipment: this.fb.group({
            equipmentId: []
          })                     
        })
        this.router.navigate(['/incidents/new/basic-info']);


  }

}
