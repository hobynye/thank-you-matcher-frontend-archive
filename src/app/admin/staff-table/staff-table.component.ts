import {AfterViewInit, Component} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {Staff} from "../../model/staff";
import {StaffService} from "../../service/staff.service";

@Component({
  selector: 'app-staff-table',
  standalone: true,
  imports: [
    MatTable,
    MatSort,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef
  ],
  templateUrl: './staff-table.component.html',
  styleUrl: './staff-table.component.css'
})
export class StaffTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'role', 'section', 'group', 'address'];
  staff: Staff[] = [];

  constructor(private service: StaffService) { }

  ngAfterViewInit() {
    this.service.getStaffMembers().subscribe(data => this.staff = data);
  }
}
