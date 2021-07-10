import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ElementsPageComponent } from '../elements-page/elements-page.component';


@Component({
  selector: 'app-create-element',
  templateUrl: './create-element.component.html',
  styleUrls: ['./create-element.component.css']
})
export class CreateElementComponent implements OnInit {
//name = new FormControl('');
elementForm = new FormGroup({
  elementName: new FormControl(''),
  elementType: new FormControl(''),
  elementCoordinates: new FormControl(''),
  elementAddress: new FormControl(''),
});

constructor(public dialogRef: MatDialogRef<CreateElementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

ngOnInit(): void {
}

save() {
  //console.log("Ovo je ime: " + this.name.value);
  //this.dialogRef.close(/*this.name.value*/);
  console.log(this.elementForm.value)
  this.dialogRef.close(this.elementForm.value);
}

}

