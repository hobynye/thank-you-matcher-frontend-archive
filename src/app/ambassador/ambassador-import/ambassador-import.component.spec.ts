import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbassadorImportComponent } from './ambassador-import.component';

describe('AmbassadorImportComponent', () => {
  let component: AmbassadorImportComponent;
  let fixture: ComponentFixture<AmbassadorImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbassadorImportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmbassadorImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
