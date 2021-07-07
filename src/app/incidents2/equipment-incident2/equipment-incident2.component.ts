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
   ,private swp:SwpInteractionService, private crewService : CrewService, private elementService : ElementsService) { }

  ngOnInit(): void {
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

    this.wrservice.sendMessage(7);
    this.router.navigate(['/incidents/new/device']);


  }

  Add(id : string){
    
      this.hlp = this.hlp + " " + id;
      console.log(this.hlp);
      this.elementsForm.controls['equipmentId'].setValue(this.hlp);



  }

  Remove(id : string){
    this.hlp.replace(id,'');
    this.elementsForm.controls['equipmentId'].setValue(this.hlp);


  }

}
