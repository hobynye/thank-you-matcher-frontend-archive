import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffTableComponent } from './staff-table.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {StaffService} from "../../service/staff.service";

describe('StaffTableComponent', () => {
  let component: StaffTableComponent;
  let fixture: ComponentFixture<StaffTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffTableComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        StaffService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
