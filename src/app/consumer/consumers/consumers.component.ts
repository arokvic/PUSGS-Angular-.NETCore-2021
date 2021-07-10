import { Component, OnInit } from '@angular/core';
import { Consumer } from 'src/app/entities/consumer';
import { Router } from '@angular/router';
import { ConsumerService } from 'src/app/services/consumer.service';
@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.css']
})
export class ConsumersComponent implements OnInit {

  consumers: Consumer[] = [];

  public page = 10;
  public pageSize = 5;

  activeId!:number;

  constructor(private router:Router, private consumerService: ConsumerService) { }

  ngOnInit(): void {
  this.consumerService.getconsumers().subscribe(
    data => {
      this.consumers = data as Consumer[];
    }
  )


  this.activeId = this.consumerService.getIdValue();
  if(this.activeId == -1){
    (async () => { 
      console.log("Primljena");
      await this.delay(1000);
      console.log("Izvrsena")
    this.consumerService.getconsumers().subscribe(
      data => {
        this.consumers = data as Consumer[];
      }
    )
  })();
    
  }

  }

newConsumer(){
  this.router.navigate(['/newConsumer']);
}

delete(id:number){
  this.consumerService.deleteConsumer(id);
  this.consumers.forEach((item, index) => {
    if(item.id == id){
      this.consumers.splice(index, 1);
    }
  }
    )
}

modify(id:number){
  this.consumerService.setIdValue(id);
  this.router.navigate(['/modifyConsumer']);
}

async delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

}
