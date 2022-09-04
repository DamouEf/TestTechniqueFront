import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-controle',
  templateUrl: './table-controle.component.html',
  styleUrls: ['./table-controle.component.scss'],
})
export class TableControleComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'intitule',
    'type',
    'chambre',
    'nbrVacations',
  ];
  @Input() dataSource: any;

  constructor() {}

  ngOnInit(): void {}
}
