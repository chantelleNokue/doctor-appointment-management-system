import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pattient } from './patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {


  constructor(private httpclient: HttpClient) { }

  createPatient(patient: Pattient): Observable<Object> {
       return this.httpclient.post(`http://localhost:8080/patient/addPatient`,patient);
  }
  logedPatient(patient: Pattient): Observable<any> {
    return this.httpclient.post(`http://localhost:8080/patient/loginptient`,patient);
  }

}
