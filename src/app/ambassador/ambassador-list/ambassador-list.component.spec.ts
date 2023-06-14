import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from "rxjs";

import SpyObj = jasmine.SpyObj;

import { AmbassadorListComponent } from './ambassador-list.component';
import { AmbassadorService } from "../ambassador.service";
import { Ambassador } from "../ambassador";

describe('AmbassadorListComponent', () => {
  let component: AmbassadorListComponent;
  let fixture: ComponentFixture<AmbassadorListComponent>;
  let ambassadorService: SpyObj<AmbassadorService>;

  beforeEach(async () => {
    const ambassadorServiceSpy = jasmine.createSpyObj('AmbassadorService', ['getAmbassadors']);

    await TestBed.configureTestingModule({
      providers: [{provide: AmbassadorService, useValue: ambassadorServiceSpy}],
      declarations: [ AmbassadorListComponent ]
    })
    .compileComponents();

    ambassadorService = TestBed.inject(AmbassadorService) as jasmine.SpyObj<AmbassadorService>;

    fixture = TestBed.createComponent(AmbassadorListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have any ambassadors before construction', () => {
        expect(component.getAmbassadors())
      .withContext('should have empty list')
      .toHaveSize(0);

    expect(ambassadorService.getAmbassadors.calls.count())
      .withContext('spy has not been called')
      .toBe(0);
  })

  it('should have 2 ambassadors after construction', () => {
    const kaffTagon: Ambassador = new Ambassador('Kaff', 'Tagon', 'Orange', 'R');
    const karlTagon: Ambassador = new Ambassador('Karl', 'Tagon', 'Blue', 'G');
    const ambassadorList: Ambassador[] = [kaffTagon, karlTagon];
    ambassadorService.getAmbassadors.and.returnValue(of(ambassadorList));

    fixture.detectChanges();

    expect(component.getAmbassadors())
      .withContext('should have 2 ambassadors')
      .toHaveSize(2);
    expect(component.getAmbassadors())
      .withContext('should match stubbed list')
      .toBe(ambassadorList);

    expect(ambassadorService.getAmbassadors.calls.count())
      .withContext('spy has been called')
      .toBe(1);
  })
});
