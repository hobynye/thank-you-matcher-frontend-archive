import { Component } from '@angular/core';
import {MatchTableComponent} from "./match-table/match-table.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatchTableComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
