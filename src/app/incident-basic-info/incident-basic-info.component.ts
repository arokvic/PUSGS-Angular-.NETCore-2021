import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Incident } from '../entities/incident';
import { Inc1Service } from '../services/inc1.service';

@Component({
  selector: 'app-incident-basic-info',
  templateUrl: './incident-basic-info.component.html',
  styleUrls: ['./incident-basic-info.component.css']
})
export class IncidentBasicInfoComponent implements OnInit {

  constructor(private fb: FormBuilder, private incService: Inc1Service,private rootFormGroup: FormGroupDirective) { }

  basicInfo!:FormGroup
  IncForm!: FormGroup;
  public formatedDate = ""
  

  ngOnInit(): void {
    /*this.IncForm = this.fb.group({
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
        scheduledTime: ['', Validators.required]
      })
    })*/

    this.basicInfo = this.rootFormGroup.control.get('basicInfo') as FormGroup;
    
  }


  save(){

   
  //  let inc = new Incident(this.basicInfo.controls.typeOfInc.value,  this.basicInfo.controls.priority.value, this.basicInfo.controls.confirmed.value, this.basicInfo.controls.status.value,
    //  "123", "123","123", "123",
  //    this.basicInfo.controls.affectedCustomers.value, this.basicInfo.controls.calls.value, this.basicInfo.controls.voltageLevel.value , "123",
 //     this.basicInfo.controls.assignedTo.value);

  //    console.log(inc);
     /* console.log(inc.calls);
      console.log(inc.typeOfInc);
      console.log(inc.affectedCustomers);
      console.log(inc.outageTime);
      console.log(inc.etr);
      console.log(inc.priority);*/



   /* this.incService.saveIncident(inc)
    .subscribe(
      data => {
      //  id = data.id;
        console.log('Id: ' + data.id);
        console.log(data.eta);
        console.log(data.calls);
        console.log(data.typeOfInc);
        console.log(data.affectedCustomers);
        console.log(data.outageTime);
        console.log(data.etr);
        console.log(data.priority);

      //  this.saveInstruction(id);
      }
    )
*/

  }
}

