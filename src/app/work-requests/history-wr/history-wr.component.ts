import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { WrInteractionService } from 'src/app/services/wr-interaction.service';
import { HistoryStateWr } from 'src/app/entities/wrHistoryState';
import { DocumentWrService } from 'src/app/services/document-wr.service';

@Component({
  selector: 'app-history-wr',
  templateUrl: './history-wr.component.html',
  styleUrls: ['./history-wr.component.css']
})
export class HistoryWrComponent implements OnInit {

  basicInfo!: FormGroup
  form!: FormGroup
  historyStates: HistoryStateWr[] = [];

  public page = 10;
  public pageSize = 3;
  cp: number = 1;
 

  constructor(private documentService: DocumentWrService, private rootFormGroup: FormGroupDirective, private router:Router, private wrService: WrInteractionService) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get('historyState') as FormGroup
    this.basicInfo = this.rootFormGroup.control.get('basicInfo') as FormGroup
    
    if(this.basicInfo.controls.id.value != null){
    this.documentService.getHistoryStatesWr(this.basicInfo.controls.id.value).subscribe(
      data => {
        this.historyStates = data as HistoryStateWr[];
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
        let newState = new HistoryStateWr(localStorage.getItem('username') || "", this.basicInfo.controls.id.value, this.form.controls.newStatus.value);
        this.documentService.saveHistoryStateWr(newState);
      }
    }else{
      console.log("Dokument jos ne postoji");
    }

      this.router.navigate(['/work-requests/new/multimedia']);
      this.wrService.sendMessage(3);
    }
  }

  validate(): boolean{
    return true;
  }

  back(){
    this.router.navigate(['/work-requests/new/basic-info']);
    this.wrService.sendMessage(1);
  }

}