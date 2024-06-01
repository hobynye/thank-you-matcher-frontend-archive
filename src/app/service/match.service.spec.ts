import { TestBed } from '@angular/core/testing';

import { MatchService } from './match.service';
import {provideHttpClient} from "@angular/common/http";
import {HttpTestingController, provideHttpClientTesting} from "@angular/common/http/testing";

describe('MatchService', () => {
  let httpTesting: HttpTestingController;
  let service: MatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        MatchService
      ]
    });
    httpTesting = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
