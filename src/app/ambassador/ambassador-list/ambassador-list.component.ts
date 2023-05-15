import { Component, OnInit } from '@angular/core';

import { AmbassadorService } from "../ambassador.service";
import { Ambassador } from "../ambassador";

@Component({
  selector: 'app-ambassador-list',
  templateUrl: './ambassador-list.component.html',
  styleUrls: ['./ambassador-list.component.css']
})
export class AmbassadorListComponent implements OnInit {
  private AMBASSADORS: Ambassador[] = [];
  constructor(private ambassadorService: AmbassadorService) {}

  ngOnInit(): void {
    this.ambassadorService
      .getAmbassadors()
      .subscribe(ambassadors => this.AMBASSADORS = ambassadors);
  }
}
