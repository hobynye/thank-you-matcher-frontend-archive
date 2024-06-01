import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchTableComponent } from './match-table.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {MatchService} from "../../service/match.service";

describe('MatchTableComponent', () => {
  let component: MatchTableComponent;
  let fixture: ComponentFixture<MatchTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchTableComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        MatchService
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
