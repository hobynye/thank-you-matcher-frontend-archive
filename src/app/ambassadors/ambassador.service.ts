import { Injectable } from '@angular/core';
import {Ambassador} from "./ambassador";
import {Observable, of} from "rxjs";

const AMBASSADORS: Ambassador[] = [
  new Ambassador('Kaff', 'Tagon', 'Green', 'R'),
  new Ambassador('Kevyn', 'Andreyasn', 'Blue', 'H'),
  new Ambassador('Breya', 'Andreyasn', 'Red', 'B'),
  new Ambassador('Gunther', 'Thurl', 'Orange', 'M'),
  new Ambassador('Edward', 'Bunnigus', 'Purple', 'F'),
  new Ambassador('Ellen', 'Foxworthy', 'Silver', 'I'),
  new Ambassador('Theo', 'Fobius', 'Red', 'C'),
  new Ambassador('Alexia', 'Murtaugh', 'Green', 'S'),
]

@Injectable({
  providedIn: 'root'
})
export class AmbassadorService {

  constructor() { }

  getAmbassadors(): Observable<Ambassador[]> {
    const ambassadors = of(AMBASSADORS);
    return ambassadors;
  }
}
