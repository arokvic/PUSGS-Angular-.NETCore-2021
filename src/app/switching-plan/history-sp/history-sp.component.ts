import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { SwpInteractionService } from 'src/app/services/swp-interaction.service';
import { DocumentService } from 'src/app/services/document.service';
import { HistoryState } from 'src/app/entities/spHistoryState';

@Component({
  selector: 'app-history-sp',
  templateUrl: './history-sp.component.html',
  styleUrls: ['./history-sp.component.css']
})
export class HistorySpComponent implements OnInit {

  basicInfo!: FormGroup
  form!: FormGroup
  historyStates: HistoryState[] = [];

  public page = 10;
  public pageSize = 3;
 

  constructor(private documentService: DocumentService, private rootFormGroup: FormGroupDirective, private router:Router, private swpService: SwpInteractionService) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get('historyState') as FormGroup
    this.basicInfo = this.rootFormGroup.control.get('basicInfo') as FormGroup
    
    if(this.basicInfo.controls.id.value != null){
    this.documentService.getHistoryStates(this.basicInfo.controls.id.value).subscribe(
      data => {
        this.historyStates = data as HistoryState[];
      }
    )
    }
  }

  

  save(){
    if(this.validate()){
      console.log("tu sam")
      if(this.basicInfo.controls.id.value != null){
      if(this.form.controls.newStatus.value != null){
        console.log("Speman novo stanje")
        let newState = new HistoryState(localStorage.getItem('username') || "", this.basicInfo.controls.id.value, this.form.controls.newStatus.value);
        this.documentService.saveHistoryState(newState);
      }
    }else{
      console.log("Dokument jos ne postoji");
    }

      this.router.navigate(['/switching-plans/new/multimedia']);
      this.swpService.sendMessage(3);
    }
  }

  validate(): boolean{
    return true;
  }

  back(){
    this.router.navigate(['/switching-plans/new/basic-info']);
    this.swpService.sendMessage(1);
  }
}
