import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Appoinmnt} from './appoinmnt'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AppoinmntService {

  constructor(private httpclient: HttpClient) { }

  makeAppoinment(appnmnt: Appoinmnt): Observable<any> {
    return this.httpclient.post(`http://localhost:8080/appnmnt/postAppnmnts`,appnmnt );
  }
  getAppnmntsList():Observable<Appoinmnt[]>{
    return this.httpclient.get<Appoinmnt[]>(`http://localhost:8080/appnmnt/getAppnmnts`);
  }

  deleteAppnmnt(id: number): Observable<any> {
    return this.httpclient.delete<any>(`http://localhost:8080/appnmnt/deleteAppnmt/${id}`);
  }


  // deltAppmnt(id:number): Observable<void>{
  //   return this.httpclient.delete<void>(`http://localhost:8080/appnmnt/deleteAppnmnts`);
  // }

}

