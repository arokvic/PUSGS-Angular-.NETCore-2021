import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { Element } from '../../entities/element';
import { ElementsService } from 'src/app/services/elements.service';
import { SwpInteractionService } from 'src/app/services/swp-interaction.service';
import { DocumentService } from 'src/app/services/document.service';
import { SwitchingPlan } from 'src/app/entities/switchingPlan';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  basicInfo!:FormGroup
  history!:FormGroup
  multimedia!:FormGroup
  equipment!:FormGroup
 
  form!:FormGroup;

  elements:Element[] = [];
  selection!:string;


  constructor(private rootFormGroup: FormGroupDirective,private http:HttpClient, private documentService: DocumentService, private router:Router, private elementService:ElementsService, private swpService:SwpInteractionService) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get('equipment') as FormGroup;
    this.elementService.loadElements().subscribe(data =>
      this.elements = data
      );
      this.selection = this.form.controls.equipmentId.value;

      this.basicInfo = this.rootFormGroup.control.get('basicInfo') as FormGroup;
    this.history = this.rootFormGroup.control.get('historyState') as FormGroup;
    this.multimedia = this.rootFormGroup.control.get('multimedia') as FormGroup;
    this.equipment = this.rootFormGroup.control.get('equipment') as FormGroup;

  }


  save(){
    if(this.validate()){
      if(!this.basicInfo.controls.id.value){
        var switchingPlan = new SwitchingPlan(this.basicInfo.controls.type.value, this.basicInfo.controls.workRequest.value, this.basicInfo.controls.status.value,
        this.basicInfo.controls.incident.value, this.basicInfo.controls.street.value, this.basicInfo.controls.startDate.value,
        this.basicInfo.controls.endDate.value, this.basicInfo.controls.crew.value, this.basicInfo.controls.createdBy.value,
        this.basicInfo.controls.notes.value, this.basicInfo.controls.company.value, this.basicInfo.controls.phoneNo.value,
        this.basicInfo.controls.dateCreated.value, this.multimedia.controls.imageData.value, "");
        if(this.equipment.controls.equipmentId.value != null){
          switchingPlan.equipment = this.equipment.controls.equipmentId.value.toString();
        }
        }else{
          var switchingPlan = new SwitchingPlan(this.basicInfo.controls.type.value, this.basicInfo.controls.workRequest.value, this.basicInfo.controls.status.value,
            this.basicInfo.controls.incident.value, this.basicInfo.controls.street.value, this.basicInfo.controls.startDate.value,
            this.basicInfo.controls.endDate.value, this.basicInfo.controls.crew.value, this.basicInfo.controls.createdBy.value,
            this.basicInfo.controls.notes.value, this.basicInfo.controls.company.value, this.basicInfo.controls.phoneNo.value,
            this.basicInfo.controls.dateCreated.value, this.multimedia.controls.imageData.value, "");
            switchingPlan.id = this.basicInfo.controls.id.value;
            if(this.equipment.controls.equipmentId.value != null){
              switchingPlan.equipment = this.equipment.controls.equipmentId.value.toString();
            }
            if(this.history.controls.newStatus.value != null){
              switchingPlan.status = this.history.controls.newStatus.value;
            }
        }

      console.log('Result: ' + switchingPlan);

      console.log('Image path ' + switchingPlan.imageData);

      var id;

      this.documentService.saveSwitchingPlan(switchingPlan)
      .subscribe(
        data => {
          id = data.id;
          console.log('Id: ' + data.id);
        }
      )

      console.log('Data:' + id);
      this.swpService.sendMessage(0);

      console.log("saljem zahtev za update")
      this.router.navigate(['/switching-plans']);
    }
}


  validate(): boolean{
    return true;
  }

  back(){
    this.router.navigate(['/switching-plans/new/multimedia']);
    this.swpService.sendMessage(3);
  }

  compareWith(item:any, selected:any){
    //console.log(item);
    //console.log(selected);

    console.log('Poredjenje: ' + item.id +  " " + selected)

    return item.id.toString() === selected.toString();
  }

}
