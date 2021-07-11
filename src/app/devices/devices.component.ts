import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementsService } from '../services/elements.service';
import { SharedService } from '../services/shared.service';
import { Element } from '../entities/element';
import { element } from 'protractor';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  devicesForm = new FormGroup({
    devicesSelected: new FormControl('')
    
  });

  public component = "devices";
  public toNavbar = [this.devicesForm, this.component];

  public allElements : Element[] = [];
  public usedElements : Element[] = [];
  allElementsList: Element[][];
  public page = 10;
  public pageUsed = 10;
  public pageSize = 3;
  public pageSizeUsed = 3;
  cp: number = 1;
  cpp: number = 1;
  
  constructor(private router: Router, private _sharedService: SharedService, private elementsService: ElementsService) { 
    this.allElementsList = new Array<Array<Element>>();

  }

  ngOnInit(): void {
    this.elementsService.loadElements()
    .subscribe(data => {
        for(let i=0; i<data.length; i++)
        {
          if(data[i].inSafetyDocument === false)
          {
            this.allElements.push(data[i]);
          } else {
            this.usedElements.push(data[i]);
          } 
          
        }
      }
      );
    //this.usedElements = this.elementsService.loadUsedElements(this.allElements);
    
  }


  onSave() {
    //console.log(this.elementForm.value.elementName) 
    //emituj vrijednost u roditeljsku komponentu(NAVBAR)
    let idsStringified = "";
    //prebaci na sledeca polja
    for(var element of this.usedElements) {
      idsStringified += element.id+";";
    }
    console.log(idsStringified);
    this.devicesForm.value.devicesSelected = new FormControl(idsStringified);

    this._sharedService.emitChange(this.toNavbar);
    this.router.navigate(['/safety-documents/new/checklist']);
  }

  onSelect(elementId : string) {
   console.log(elementId);
   //this.usedElements = this.elementsService.moveElementToUsedElements(elementId, this.usedElements);
   this.allElements = this.allElements.filter(item => item.id.toString() != elementId);
   
  }
  onRemove(elementId : string) {
    
   console.log(elementId);
   //this.allElements = this.elementsService.moveElementToAllElements(elementId, this.allElements);
   this.usedElements = this.usedElements.filter(item => item.id.toString() != elementId);
   
  }

}
