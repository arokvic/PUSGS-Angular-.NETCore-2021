import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Incident } from 'src/app/entities/incident';
import { WrInteractionService } from 'src/app/services/wr-interaction.service';
import { SwpInteractionService } from 'src/app/services/swp-interaction.service';
import { Router } from '@angular/router';
import { ConsumerService } from 'src/app/services/consumer.service';
import { Consumer} from 'src/app/entities/consumer';


@Component({
  selector: 'app-calls-incident2',
  templateUrl: './calls-incident2.component.html',
  styleUrls: ['./calls-incident2.component.css']
})
export class CallsIncident2Component implements OnInit {

  constructor(private fb: FormBuilder,
    private wrservice: WrInteractionService,private rootFormGroup: FormGroupDirective,
   private router:Router
   ,private swp:SwpInteractionService, private consumerService : ConsumerService) { }


   hazardF:boolean = false;
   commentF:boolean = false;
   consumerIdF:boolean = false;
   reasonF:boolean = false;
   callsForm!:FormGroup
   public allIncidents: Consumer[] = [];
  
  
    public consumer = new Consumer("","","","","","");
  ngOnInit(): void {



    this.consumerService.getconsumers().subscribe(data=> {
      this.allIncidents = data;
      console.log(this.allIncidents);


    });

    setTimeout(() => {
      console.log('hello');
  }, 1000);
    this.callsForm = this.rootFormGroup.control.get('calls') as FormGroup;

    

  }

  save(){

   // console.log(this.basicform.controls.typeOfInc.value + this.basicform.controls.Id.value);
   // console.log(this.resolutionForm.controls.cause.value + this.basicform.controls.subcause.value);
    if (this.validate()){
    this.wrservice.sendMessage(4);
    this.router.navigate(['/incidents/new/multimedia']);
    }

  }


  onOptionsSelected(name:string){
    console.log(name);
    let x : string = "";
    let y : string = "";
    let z : string = "";
    let v : string = "";

    this.allIncidents.forEach(function (value) {
      if (value.name === name){
        x = value.name;
        y = value.surname;
        z = value.street;
        v = value.city;
        

      }
  });

        this.consumer.name = x;
        this.consumer.city = v;
      
        this.consumer.surname = y;
        this.consumer.street = z;
        console.log(this.consumer);
    
}


validate():boolean {
  let retVal = true;
  if(this.callsForm.controls.reason.hasError('required')){
    this.reasonF = true;
    retVal = false;
  }else{
    this.reasonF = false;
  }
  if(this.callsForm.controls.hazard.hasError('required')){
    this.hazardF = true;
    retVal = false;
  }else{
    this.hazardF = false;
  }
  if(this.callsForm.controls.consumerId.hasError('required')){
    this.consumerIdF = true;
    retVal = false;
  }else{
    this.consumerIdF = false;
  }
  if(this.callsForm.controls.comment.hasError('required')){
    this.commentF = true;
    retVal = false;
  }else{
    this.commentF = false;
  }


  return retVal;

}


}