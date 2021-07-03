import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ElementsService } from 'src/app/services/elements.service';
import { Element } from '../../entities/element';

@Component({
  selector: 'app-create-instruction-sp',
  templateUrl: './create-instruction-sp.component.html',
  styleUrls: ['./create-instruction-sp.component.css']
})
export class CreateInstructionSpComponent implements OnInit {

  instructionForm = new FormGroup({
    action: new FormControl('', Validators.required),
    element: new FormControl('')
  });

  actionR:boolean = false;

  elements:Element[] = [];

  constructor(public dialogRef: MatDialogRef<CreateInstructionSpComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any, private elementService: ElementsService) { }

  ngOnInit(): void {
    this.elementService.loadElements().subscribe(data =>
      this.elements = data
      );
  }

  save() {
    if(this.validation()){
      console.log(this.instructionForm.value)
      this.dialogRef.close(this.instructionForm.value);
    }
  }

  cancel(){
    this.dialogRef.close(null);
  }

  validation():boolean{
    let retVal = true;
    if(this.instructionForm.controls.action.hasError('required')){
      this.actionR = true;
      retVal = false;
    }else{
      this.actionR = false;
    }

    return retVal;

  }

}
