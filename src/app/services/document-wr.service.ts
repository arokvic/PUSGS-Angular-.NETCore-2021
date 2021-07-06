import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HistoryState } from 'src/app/entities/spHistoryState';
import { WorkRequest } from '../entities/workRequest';
import { InstructionWr } from '../entities/instructionWr';
import { HistoryStateWr } from '../entities/wrHistoryState';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  params: new HttpParams()
};

@Injectable({
  providedIn: 'root'
})
export class DocumentWrService {
  constructor(private http: HttpClient) { }

  saveWorkRequest(workRequest: WorkRequest) {
    return this.http.post<WorkRequest>("https://localhost:44364/api/DocumentWr/SaveWorkRequest", workRequest);
  }

  getWorkRequests(): Observable<WorkRequest[]>{
    return this.http.get<WorkRequest[]>("https://localhost:44364/api/DocumentWr/GetWorkRequests"); 
  }

  saveInstructionWr(instruction: InstructionWr) {
    return this.http.post<InstructionWr>("https://localhost:44364/api/DocumentWr/SaveInstructionWr", instruction);
  }

  getInstructionsWr(): Observable<InstructionWr[]>{
    return this.http.get<InstructionWr[]>("https://localhost:44364/api/DocumentWr/GetInstructionsWr"); 
  }

  getWorkRequest(id: number): any{
    const param = new HttpParams().append('id', id.toString());
    httpOptions.params = param;

    let sw = null;

    return this.http.get("https://localhost:44364/api/DocumentWr/GetWorkRequest?id="+id)

    
  }

  executeInstructionWr(id:number){
    console.log("Id: " + id)
    return this.http.put("https://localhost:44364/api/DocumentWr/ExecuteInstructionWr", id)
    .subscribe(
      data => {
        console.log(data);
      }
    )
  }

  deleteInstructionWr(id:number){
    console.log("Id: " + id)
    return this.http.put("https://localhost:44364/api/DocumentWr/DeleteInstructionWr", id)
    .subscribe(
      data => {
        console.log(data);
      }
    )
  }

  deleteAllInstructionsWr(id:number){
    console.log("Id: " + id)
    return this.http.put("https://localhost:44364/api/DocumentWr/DeleteAllInstructionsWr", id)
    .subscribe(
      data => {
        console.log(data);
      }
    )
  }

  getHistoryStatesWr(id:number){
    return this.http.get("https://localhost:44364/api/DocumentWr/GetHistoryStateWr?id="+id);
  }

  saveHistoryStateWr(historyStateWr:HistoryStateWr){
    return this.http.post("https://localhost:44364/api/DocumentWr/SaveHistoryStateWr", historyStateWr).subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
