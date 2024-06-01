import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from "@angular/common/http";
import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";
import { StaffService } from './staff.service';
import { Staff } from "../model/staff";

describe('StaffService', () => {
  let httpTesting: HttpTestingController;
  let service: StaffService;

  const STAFF: Staff[] = [
    {id: 1, firstName: 'Hugh', lastName: 'O\'Brian', section: 'Red', group: '', role: 'Section Leader', address: { street1: '123 Made Way', street2: '', city: 'Nowhereville', state: 'NY', zip: '00000' }},
    {id: 2, firstName: 'Albert', lastName: 'Schweitzer', section: 'Red', group: 'A', role: 'Facilitator', address: { street1: "123 Made Way", street2: "", city: "Nowhereville", state: "NY", zip: "00000" }},
    {id: 3, firstName: 'Virgina', lastName: 'Barber', section: '', group: '', role: 'Leadership Seminar Chair', address: { street1: "123 Made Way", street2: "", city: "Nowhereville", state: "NY", zip: "00000" }}
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        StaffService
      ]
    });
    httpTesting = TestBed.inject(HttpTestingController);
    service = TestBed.inject(StaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a single staff member', () => {
    service.getStaffMember(1).subscribe(member => {
      expect(member).toBeTruthy();
      expect(member).toBe(STAFF[0]);
    });

    const request = httpTesting.expectOne('/staff/1');
    expect(request.cancelled).toBeFalsy();
    expect(request.request.method).toBe('GET');
    expect(request.request.responseType).toBe('json');

    request.flush(STAFF[0]);
  });

  it('should get all staff', () => {
    service.getStaffMembers().subscribe(staff => {
      expect(staff).toBeTruthy();
      expect(staff).toBe(STAFF);
    });

    const request = httpTesting.expectOne('/staff');
    expect(request.cancelled).toBeFalsy();
    expect(request.request.method).toBe('GET');
    expect(request.request.responseType).toBe('json');

    request.flush(STAFF);
  });
});
