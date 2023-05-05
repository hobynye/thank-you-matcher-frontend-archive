import { TestBed } from '@angular/core/testing';

import { AmbassadorService } from './ambassador.service';
import { Ambassador } from "./ambassador";

describe('AmbassadorService', () => {
  let service: AmbassadorService;
  let ambassadors: Ambassador[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmbassadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 8 Ambassadors', () => {
    service.getAmbassadors().subscribe(ambassadors => {
      expect(ambassadors.length).toBe(8);
    });
  });
});
