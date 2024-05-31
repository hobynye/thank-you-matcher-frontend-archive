import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Ambassador } from "./ambassador";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AmbassadorService {
  private AMBASSADOR_API = 'http://localhost:8080/api/ambassadors';

  constructor(private http: HttpClient) { }

  getAmbassadors(): Observable<Ambassador[]> {
    return this.http.get<Ambassador[]>(`${this.AMBASSADOR_API}`);
  }

  getAmbassador(id: number): Observable<Ambassador> {
    return this.http.get<Ambassador>(`${this.AMBASSADOR_API}/${id}`);
  }
}
