import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Ambassador } from "../model/ambassador";
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AmbassadorService {
  private AMBASSADOR_API_URL = `${environment.apiUrl}/ambassadors`;

  constructor(private http: HttpClient) { }

  getAmbassadors(): Observable<Ambassador[]> {
    return this.http.get<Ambassador[]>(`${this.AMBASSADOR_API_URL}`);
  }

  getAmbassador(id: number): Observable<Ambassador> {
    return this.http.get<Ambassador>(`${this.AMBASSADOR_API_URL}/${id}`);
  }
}
