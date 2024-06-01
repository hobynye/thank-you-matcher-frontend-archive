import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Staff} from "../model/staff";

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private STAFF_API_URL = `${environment.apiUrl}/staff`;

  constructor(private http: HttpClient) { }

  getStaffMembers(): Observable<Staff[]> {
    return this.http.get<Staff[]>(`${this.STAFF_API_URL}`);
  }

  getStaffMember(id: number): Observable<Staff> {
    return this.http.get<Staff>(`${this.STAFF_API_URL}/${id}`);
  }
}
