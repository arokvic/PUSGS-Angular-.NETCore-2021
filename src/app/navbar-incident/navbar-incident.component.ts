import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Incident } from '../entities/incident';
import { Inc1Service } from '../services/inc1.service';


@Component({
  selector: 'app-navbar-incident',
  templateUrl: './navbar-incident.component.html',
  styleUrls: ['./navbar-incident.component.css']
})
export class NavbarIncidentComponent implements OnInit {

  IncForm!: FormGroup;
  activeId = 1;
  documentId: number = -1;
  incident!:Incident;
  constructor(private router: Router,private fb: FormBuilder,private incService: Inc1Service) { }

  ngOnInit(): void {
    this.incService.Id$.subscribe(
      message => {
        console.log('NavBarId: ' + message);
        this.activeId = message;



      }




    );

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
        crewId : [],
        

      }),
      multimediaAtt: this.fb.group({
        imageData: []
      }),
      equipment: this.fb.group({
        equipmentId: []
      })
    
     
     
    })


   

  }

  

}
