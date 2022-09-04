import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlesListComponent } from './containers/controles-list/controles-list.component';
import { TableControleComponent } from './components/table-controle/table-controle.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@shared/material';

@NgModule({
  declarations: [ControlesListComponent, TableControleComponent],
  exports: [ControlesListComponent],
  imports: [CommonModule, HttpClientModule, MaterialModule],
})
export class ControleManagementModule {}
