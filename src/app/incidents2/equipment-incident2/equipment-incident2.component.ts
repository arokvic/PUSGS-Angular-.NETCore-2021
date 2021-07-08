import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Incident } from 'src/app/entities/incident';
import { WrInteractionService } from 'src/app/services/wr-interaction.service';
import { SwpInteractionService } from 'src/app/services/swp-interaction.service';
import { Router } from '@angular/router';
import { Crew } from 'src/app/entities/crew';
import { Element } from 'src/app/entities/element';
import { CrewService } from 'src/app/services/crew.service';
import { ElementsService } from 'src/app/services/elements.service';
import { Inc1Service } from 'src/app/services/inc1.service';


@Component({
  selector: 'app-equipment-incident2',
  templateUrl: './equipment-incident2.component.html',
  styleUrls: ['./equipment-incident2.component.css']
})
export class EquipmentIncident2Component implements OnInit {

  elementsForm!:FormGroup;
  allEelements:Element[] = [];
  hlp! : string;
  constructor(private fb: FormBuilder,
    private wrservice: WrInteractionService,private rootFormGroup: FormGroupDirective,
   private router:Router
   ,private swp:SwpInteractionService, private crewService : CrewService, private elementService : ElementsService
   , private incService: Inc1Service) { }


   basicInfo!:FormGroup
   resolution!:FormGroup
   multimedia!:FormGroup
   equipment!:FormGroup
   crew! : FormGroup;
   device! : FormGroup;
   calls! : FormGroup;

  ngOnInit(): void {


    this.basicInfo = this.rootFormGroup.control.get('basicInfo') as FormGroup;
    this.resolution = this.rootFormGroup.control.get('resolution') as FormGroup;
    this.multimedia = this.rootFormGroup.control.get('multimediaAtt') as FormGroup;
    this.equipment = this.rootFormGroup.control.get('equipment') as FormGroup;
    this.crew = this.rootFormGroup.control.get('crew') as FormGroup;
    this.device = this.rootFormGroup.control.get('devices') as FormGroup;
    this.calls = this.rootFormGroup.control.get('calls') as FormGroup;


    this.elementsForm = this.rootFormGroup.control.get('equipment') as FormGroup;
    this.elementService.loadElements().subscribe(data =>
      this.allEelements = data
      );
      console.log(this.allEelements.length);
      let s = new Element("asd", 123, "name1" , "adresa" , "123" , true);
      let ss = new Element("qqq", 444, "name2" , "adres222a" , "444" , false);
      this.allEelements.push(s);
      this.allEelements.push(ss);
      

  }

  Save(){

    var inc = new Incident(this.basicInfo.controls.typeOfInc.value,this.basicInfo.controls.priority.value,this.basicInfo.controls.confirmed.value,this.basicInfo.controls.status.value,
      this.basicInfo.controls.eta.value,
      this.basicInfo.controls.ata.value,this.basicInfo.controls.outageTime.value,this.basicInfo.controls.etr.value,this.basicInfo.controls.affectedCustomers.value
      ,this.basicInfo.controls.calls.value,
      this.basicInfo.controls.voltageLevel.value,this.basicInfo.controls.scheduledTime.value,this.basicInfo.controls.assignedTo.value,this.resolution.controls.cause.value
      ,this.resolution.controls.subcause.value,
      this.resolution.controls.material.value,this.resolution.controls.constructionType.value,"+",this.calls.controls.comment.value,this.calls.controls.hazard.value,this.calls.controls.reason.value,
      "deviceId",this.equipment.controls.equipmentId.value,this.multimedia.controls.imageData.value,this.crew.controls.crewId.value);
  

    //this.wrservice.sendMessage(7);
   // this.router.navigate(['/incidents/new/device']);
   console.log(inc);
   var id;
   this.incService.saveIncident(inc)
   .subscribe(
     data => {
    
       id = data.id;
       console.log('Id: ' + data.id);
 })

  }

  Add(id : string){
    
    this.hlp = this.hlp + " " + id;
    console.log(this.hlp);
    this.elementsForm.controls['equipmentId'].setValue(this.hlp);



  }

  Remove(id : string){
    console.log(id);
    this.hlp = this.hlp.replace(' ' + id,'');
    console.log("id" +this.hlp + "id");
    this.elementsForm.controls['equipmentId'].setValue(this.hlp);


  }

}
