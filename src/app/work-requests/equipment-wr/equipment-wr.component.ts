import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { Element } from '../../entities/element';
import { ElementsService } from 'src/app/services/elements.service';
import { WrInteractionService } from 'src/app/services/wr-interaction.service';
import { WorkRequest } from 'src/app/entities/workRequest';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-equipment-wr',
  templateUrl: './equipment-wr.component.html',
  styleUrls: ['./equipment-wr.component.css']
})
export class EquipmentWrComponent implements OnInit {
  form!:FormGroup;

  elements:Element[] = [];
  selection!:string;


  constructor(private rootFormGroup: FormGroupDirective, private router:Router, private elementService:ElementsService, private wrService:WrInteractionService, private http:HttpClient) { }

  ngOnInit(): void {
    
    this.form = this.rootFormGroup.control.get('equipment') as FormGroup;
    /*
    this.elementService.loadElements().subscribe(data =>
      this.elements = data
      );
      this.selection = this.form.controls.equipmentId.value;
      */
  }


  save(){
   // if(this.validate()){
      //console.log("tu sam")
     // this.wrService.sendMessage(5);
     // this.router.navigate(['/work-requests/new/instructions']);
      //URADITI STA TREBA KAD SAVE POSLEDNJU TACKU!
    //}
    //var workRequest = new WorkRequest()
    /*
    var workRequest = localStorage.getItem("wrID");
    this.router.navigate(['/work-requests']);
    this.http.post('https://localhost:44364/api/DocumentWr/SaveWorkRequest', workRequest);
    */
    var workRequest = localStorage.getItem("wrID");
    //this.router.navigate(['/work-requests']);
    
    const headerDict ={
      'Content-Type': 'application/json',
      'Accept' : 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    }
    
    const data = JSON.stringify(workRequest);
    //console.log(data);
    console.log(workRequest)
    this.http.post('https://localhost:44364/api/DocumentWr/SaveWorkRequest', workRequest, requestOptions).subscribe();
    this.router.navigate(['/work-requests']);
    /*
     this.credentials = JSON.stringify(this.profileForm.value);

    this.http.post("https://localhost:44364/api/User/Register", this.credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe
    */
   
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