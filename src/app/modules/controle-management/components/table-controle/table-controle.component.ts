import { Component, Input, OnInit } from '@angular/core';
import { Control } from '@app/shared/models/control.model';
import { Intervenant } from '@app/shared/models/intervenant.model';

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
  @Input() dataSource: Control[];

  constructor() {}

  ngOnInit(): void {}

  getNbreVacations(intervenants: Intervenant[]): number {
    const nbreVacations: number[] = intervenants.map(i => i.vacations_number);
    const initValue = 0;
    return nbreVacations.reduce((previousValue, currentValue) => previousValue + currentValue, initValue);
  }
  
}
