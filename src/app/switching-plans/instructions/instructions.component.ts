import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { SwpInteractionService } from 'src/app/services/swp-interaction.service';
import { Instruction } from '../../entities/instruction';
import { MatDialog } from '@angular/material/dialog';
import { CreateInstructionComponent } from '../create-instruction/create-instruction.component';
import { DocumentService } from 'src/app/services/document.service';
import { SwitchingPlan } from 'src/app/entities/switchingPlan';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  basicInfo!:FormGroup
  history!:FormGroup
  multimedia!:FormGroup
  equipment!:FormGroup


  instructions: Instruction[] = [];
  newInstructions: Instruction[] = [];

  public page = 10;
  public pageSize = 3;


  constructor(private http:HttpClient, private documentService: DocumentService, private rootFormGroup: FormGroupDirective, public dialog: MatDialog, private router:Router, private swpService:SwpInteractionService) { }

  ngOnInit(): void {
    this.basicInfo = this.rootFormGroup.control.get('basicInfo') as FormGroup;
    this.history = this.rootFormGroup.control.get('historyState') as FormGroup;
    this.multimedia = this.rootFormGroup.control.get('multimedia') as FormGroup;
    this.equipment = this.rootFormGroup.control.get('equipment') as FormGroup;

    if(this.basicInfo.controls.id.value != null){
      this.http.get("https://localhost:44364/api/Document/GetDocumentInstruction?id=" + this.basicInfo.controls.id.value).subscribe(
        data => {
          this.instructions = data as Instruction[];
        }
      )
    }


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
          this.saveInstruction(id);
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
    this.swpService.sendMessage(4);
    this.router.navigate(['/switching-plans/new/equipment']);
  }

  AddInstruction(){
    console.log('otvorio sam konzolu');
    const dialogRef = this.dialog.open(CreateInstructionComponent, {
      width: '350px',
      height: '300px'
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result != null){
        console.log(result.action);
        let instruction = new Instruction(result.action, result.element, false, false);
        this.instructions.push(instruction);
        this.newInstructions.push(instruction);

      }
    });

  }

  removeAll(){

  }

  openDialog(): void {
    console.log('otvorio sam konzolu');
    const dialogRef = this.dialog.open(CreateInstructionComponent, {
      width: '250px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      
    });
  }

  saveInstruction(id:number){
    console.log("Spremanje instrukcija")
    this.newInstructions.forEach(item => {
      item.documentId = id;
      this.documentService.saveInstruction(item).subscribe(
        data => {
          console.log(data);
        }
      )
    })
  }


  execute(id:number){
    console.log("Execute: " + id)

    let contain = false;
    this.instructions.forEach(item =>{
      if(item.id == id){
        item.executed = true;
        this.documentService.executeInstruction(id);
        contain = true;
      }
    }
      )

    if(contain == false){
      this.newInstructions.forEach(item => {
        item.documentId = this.basicInfo.controls.id.value;
        this.documentService.saveInstruction(item).subscribe(
          data => {
            console.log(data);
          }
        )
      })

      this.documentService.getInstructions().subscribe(
        data => {
          this.instructions = data;
          this.instructions.forEach(item =>{
            if(item.id == id){
              item.executed = true;
              this.documentService.executeInstruction(id);
            }
          }
            )
        }
      );

    }


  }

  

  delete(id:number){
    console.log("Delete: " + id)

    let contain = false;
    this.instructions.forEach((item, index) => {
      if(item.id == id){
        item.deleted = true;
        this.instructions.splice(index, 1);
        this.documentService.deleteInstruction(id);
        contain = true;
      }
    }
      )

    if(contain == false){
      this.newInstructions.forEach(item => {
        item.documentId = this.basicInfo.controls.id.value;
        this.documentService.saveInstruction(item).subscribe(
          data => {
            console.log(data);
          }
        )
      })

      this.documentService.getInstructions().subscribe(
        data => {
          this.instructions = data;
          this.instructions.forEach((item, index) =>{
            if(item.id == id){
              item.deleted = true;
              this.instructions.splice(index, 1);
              this.documentService.deleteInstruction(id);
            }
          }
            )
        }
      );

    }

  }

  deleteAll(){
    if(this.basicInfo.controls.id.value != null){
    this.documentService.deleteAllInstructions(this.basicInfo.controls.id.value);
    this.instructions = [];
    this.newInstructions = [];
    }
  }

}
