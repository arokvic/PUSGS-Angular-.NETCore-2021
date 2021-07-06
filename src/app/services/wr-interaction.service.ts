import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WrInteractionService {

  private activeId = new Subject<number>();
  currentActiveId$ = this.activeId.asObservable();

  private idValue: any;

  constructor() { }

  sendMessage(message: number){
    this.activeId.next(message);
  }

  

  setIdValue(id:number){
    this.idValue = id;
  }

  getIdValue(){
    return this.idValue;
  }
}
