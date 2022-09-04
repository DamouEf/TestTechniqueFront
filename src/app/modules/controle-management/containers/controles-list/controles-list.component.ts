import {Component, OnInit} from '@angular/core';
import { ControlService } from '@app/services/control.service';
import { Control } from '@app/shared/models/control.model';


@Component({
  selector: 'app-controles-list',
  templateUrl: './controles-list.component.html',
  styleUrls: ['./controles-list.component.scss'],
})
export class ControlesListComponent implements OnInit {
  controles: Control[];
  constructor(private controlService: ControlService) {
  }

  ngOnInit(): void {
    this.controlService.getControl().subscribe(res => {
      this.controles = res
    });
  }
}
