import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { Element } from '../../entities/element';
import { ElementsService } from 'src/app/services/elements.service';
import { WrInteractionService } from 'src/app/services/wr-interaction.service';

@Component({
  selector: 'app-equipment-wr',
  templateUrl: './equipment-wr.component.html',
  styleUrls: ['./equipment-wr.component.css']
})
export class EquipmentWrComponent implements OnInit {

  form!:FormGroup;

  elements:Element[] = [];
  selection!:string;


  constructor(private rootFormGroup: FormGroupDirective, private router:Router, private elementService:ElementsService, private wrService:WrInteractionService) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get('equipment') as FormGroup;
    this.elementService.loadElements().subscribe(data =>
      this.elements = data
      );
      this.selection = this.form.controls.equipmentId.value;
  }


  save(){
    //if(this.validate()){
    //  console.log("tu sam")
     // this.wrService.sendMessage(5);
     // this.router.navigate(['/work-requests/new/instructions']);
     console.log("ok")
    }
  

  validate(): boolean{
    return true;
  }

  back(){
    this.router.navigate(['/work-requests/new/multimedia']);
    this.wrService.sendMessage(3);
  }

  compareWith(item:any, selected:any){
    //console.log(item);
    //console.log(selected);

    console.log('Poredjenje: ' + item.id +  " " + selected)

    return item.id.toString() === selected.toString();
  }
}
