import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbassadorListComponent } from './ambassador-list.component';

describe('AmbassadorListComponent', () => {
  let component: AmbassadorListComponent;
  let fixture: ComponentFixture<AmbassadorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbassadorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmbassadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
