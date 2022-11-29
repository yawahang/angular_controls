import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { OhTableModule } from './../shared/oh-table/oh-table/oh-table.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OhTableDemoComponent } from './oh-table-demo.component';
import { TableActionFormDialog } from './table-action-form.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [OhTableDemoComponent, TableActionFormDialog],
  imports: [
    CommonModule,
    OhTableModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  exports: [OhTableDemoComponent],
})
export class OhTableDemoModule { }
