import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from "@angular/common/http";
import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";
import { AmbassadorService } from './ambassador.service';
import { Ambassador } from "./ambassador";

describe('AmbassadorService', () => {
  let httpTesting: HttpTestingController;
  let service: AmbassadorService;

  const AMBASSADORS: Ambassador[] = [
    {id: 1, firstName: 'Hugh', lastName: 'O\'Brian', section: 'Red', group: 'A'},
    {id: 2, firstName: 'Albert', lastName: 'Schweitzer', section: 'Red', group: 'A'},
    {id: 3, firstName: 'Virgina', lastName: 'Barber', section: 'Red', group: 'A'},
  ]

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        AmbassadorService
      ]
    });

    httpTesting = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AmbassadorService);
  });

  afterEach(async () => {
    TestBed.inject(HttpTestingController).verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a single ambassador', () => {
    service.getAmbassador(1).subscribe(ambassador => {
      expect(ambassador).toBeTruthy();
      expect(ambassador).toBe(AMBASSADORS[0]);
    });

    const request = httpTesting.expectOne('/api/ambassadors/1');
    expect(request.cancelled).toBeFalsy();
    expect(request.request.method).toBe('GET');
    expect(request.request.responseType).toBe('json');

    request.flush({payload: AMBASSADORS[1]});
  });

  it('should get all ambassadors', () => {
    service.getAmbassadors().subscribe(ambassadors => {
      expect(ambassadors).toBeTruthy();
      expect(ambassadors).toBe(AMBASSADORS);
    });

    const request = httpTesting.expectOne('/api/ambassadors');
    expect(request.cancelled).toBeFalsy();
    expect(request.request.method).toBe('GET');
    expect(request.request.responseType).toBe('json');

    request.flush({payload: AMBASSADORS});
  });
});
