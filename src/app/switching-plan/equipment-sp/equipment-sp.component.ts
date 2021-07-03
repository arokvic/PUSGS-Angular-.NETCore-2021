import { Component, OnInit } from '@angular/core';
import { SwpInteractionService } from 'src/app/services/swp-interaction.service';
import { Router } from '@angular/router';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Element } from '../../entities/element';
import { ElementsService } from 'src/app/services/elements.service';

@Component({
  selector: 'app-equipment-sp',
  templateUrl: './equipment-sp.component.html',
  styleUrls: ['./equipment-sp.component.css']
})
export class EquipmentSpComponent implements OnInit {
  form!:FormGroup;

  elements:Element[] = [];
  selection!:string;


  constructor(private rootFormGroup: FormGroupDirective, private router:Router, private elementService:ElementsService, private swpService:SwpInteractionService) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get('equipment') as FormGroup;
    this.elementService.loadElements().subscribe(data =>
      this.elements = data
      );
      this.selection = this.form.controls.equipmentId.value;
  }


  save(){
    if(this.validate()){
      console.log("tu sam")
      this.swpService.sendMessage(5);
      this.router.navigate(['/switching-plans/new/instructions']);
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
