import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Incident } from '../entities/incident';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Inc1Service {

  private id = new Subject<number>();
  Id$ = this.id.asObservable();
  private idValue: any;

  constructor(private http: HttpClient) { }

  getSwitchingPlans(): Observable<Incident[]>{
    return this.http.get<Incident[]>("https://localhost:44364/api/Incident/GetIncidents"); 
  }


  sendMessage(message: number){
    this.id.next(message);
  }

  

  setIdValue(id:number){
    this.idValue = id;
  }

  getIdValue(){
    return this.idValue;
  }

  saveIncident(incident: Incident) {

    const headers = new HttpHeaders()
     .set('Content-Type', 'application/json;charset=UTF-8')     

    let options = { headers : headers };
    return this.http.post<Incident>("https://localhost:44364/api/Incident/AddIncident",JSON.stringify(incident), options);
  }
  

}
