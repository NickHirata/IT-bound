import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { CommonTableComponent } from '../common-table/common-table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTableModule, MatCardModule, CommonTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor() {}

  ngOnInit() {}
}
