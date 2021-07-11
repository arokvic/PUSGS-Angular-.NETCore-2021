import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Call } from '../entities/call';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CallsService {

  constructor(private http:HttpClient) { }

  getCalls(): Observable<Call[]>{
    return this.http.get<Call[]>("https://localhost:44364/api/Calls/GetCalls");
  }

  saveConsumer(call:Call){
    return this.http.post("https://localhost:44364/api/Calls/SaveCalls", call)
    .subscribe(
      data => {
        console.log(data);
      }
    );
    }

}
