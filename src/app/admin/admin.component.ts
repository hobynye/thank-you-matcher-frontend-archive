import { Component } from '@angular/core';
import {MatTab, MatTabGroup, MatTabLabel} from "@angular/material/tabs";
import {MatIcon} from "@angular/material/icon";
import {AmbassadorTableComponent} from "./ambassador-table/ambassador-table.component";
import {StaffTableComponent} from "./staff-table/staff-table.component";


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    MatTabLabel,
    MatIcon,
    AmbassadorTableComponent,
    StaffTableComponent,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  protected currentTab: number = 0;
}
