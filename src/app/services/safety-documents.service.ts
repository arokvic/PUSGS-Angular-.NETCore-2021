import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IncidentModel } from 'src/app/entities/incidentModel';
import { SafetyDocument } from 'src/app/entities/safety-document';

@Injectable({
  providedIn: 'root'
})
export class SafetyDocumentsService {

  constructor(private http: HttpClient) { }


  saveSafetyDocument(safetyDocument: SafetyDocument){

    /*const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }*/

    
    this.http.post("https://localhost:44364/api/SafetyDocuments/AddSafetyDocument", safetyDocument/*, httpOptions*/)
  .subscribe(
    data => console.log('oops', data)
  );
  }

  loadSafetyDocuments(): Observable<SafetyDocument[]>{
    return this.http.get<SafetyDocument[]>("https://localhost:44364/api/SafetyDocuments");
  }


  saveIncident(incident: IncidentModel){

    /*const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }*/

    
    this.http.post("https://localhost:44364/api/Incidents/AddIncident", incident/*, httpOptions*/)
  .subscribe(
    data => console.log('oops', data)
  );
  }

  loadIncident(): Observable<IncidentModel[]>{
    return this.http.get<IncidentModel[]>("https://localhost:44364/api/Incidents");
  }

}
