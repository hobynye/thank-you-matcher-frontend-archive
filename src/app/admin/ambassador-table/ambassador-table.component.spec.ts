import {ComponentFixture, TestBed} from '@angular/core/testing';

import { AmbassadorTableComponent } from './ambassador-table.component';
import { AmbassadorService } from "../../service/ambassador.service";
import {Ambassador} from "../../model/ambassador";
import {Observable, of} from "rxjs";
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

class MockAmbassadorService extends AmbassadorService {
  private AMBASSADORS: Ambassador[] = [
    {id: 1, firstName: 'Hugh', lastName: 'O\'Brian', section: 'Red', group: 'A'},
    {id: 2, firstName: 'Albert', lastName: 'Schweitzer', section: 'Red', group: 'A'},
    {id: 3, firstName: 'Virgina', lastName: 'Barber', section: 'Red', group: 'A'},
  ]

  override getAmbassadors(): Observable<Ambassador[]> {
    return of(this.AMBASSADORS);
  }
}

describe('AmbassadorTableComponent', () => {
  let component: AmbassadorTableComponent;
  let fixture: ComponentFixture<AmbassadorTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmbassadorTableComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        AmbassadorService
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmbassadorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
