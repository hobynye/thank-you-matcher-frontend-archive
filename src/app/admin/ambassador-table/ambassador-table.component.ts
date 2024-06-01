import {AfterViewInit, Component} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {Ambassador} from "../../model/ambassador";
import {AmbassadorService} from "../../service/ambassador.service";

@Component({
  selector: 'app-ambassador-table',
  standalone: true,
  imports: [
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatSort,
    MatTable
  ],
  templateUrl: './ambassador-table.component.html',
  styleUrl: './ambassador-table.component.css'
})
export class AmbassadorTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['first', 'last', 'section', 'group'];
  ambassadors: Ambassador[] = [];

  constructor(private service: AmbassadorService) { }

  ngAfterViewInit(): void {
    this.service.getAmbassadors().subscribe(data => this.ambassadors = data);
  }
}
