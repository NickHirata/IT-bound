import { CommonModule } from '@angular/common';
import { Impedimentos } from './../model/impedimentos';
import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-common-table',
  standalone: true,
  imports: [MatCardModule, MatTableModule, CommonModule],
  templateUrl: './common-table.component.html',
  styleUrl: './common-table.component.scss',
})
export class CommonTableComponent {
  @Input() title: string = '';
  @Input() selectedTable: string = 'impedimentos';

  impedimento: Impedimentos[] = [
    {
      _id: '1',
      atividade: 'Ambiente',
      motivo: 'Aprovação do cliente',
      status: 'Pendente',
    },
    {
      _id: '2',
      atividade: 'Teste cadastro',
      motivo: 'Falta de recurso',
      status: 'Resolvido',
    },
    {
      _id: '3',
      atividade: 'Implantação',
      motivo: 'Sem profissional',
      status: 'Pendente',
    },
  ];

  displayedColumns = ['atividade', 'motivo', 'status'];

  cardHeaderWidth: string = 'auto';
  constructor() {}

  ngOnInit(): void {
    this.calculateCardHeaderWidth();
  }

  calculateCardHeaderWidth(): void {
    if (this.displayedColumns.length > 0) {
      const averageColumnWidth = 100 / this.displayedColumns.length;
      console.log(averageColumnWidth);
      this.cardHeaderWidth = `${averageColumnWidth}%`;
    }
  }
}
