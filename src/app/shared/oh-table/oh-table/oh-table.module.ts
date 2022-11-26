import { ResizableModule } from 'angular-resizable-element';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { ExcelExportService } from '../excel-export.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OhTableComponent } from './oh-table.component';
import { OhTableRowSelectionDirectiveModule } from '../oh-table-row-selection/oh-table-row-selection.module';

@NgModule({
  declarations: [OhTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatMenuModule,
    MatCheckboxModule,
    MatIconModule,
    ResizableModule,
    DragDropModule,
    MatDialogModule,
    MatButtonModule,
    OhTableRowSelectionDirectiveModule,
  ],
  providers: [ExcelExportService],
  exports: [OhTableComponent],
})
export class OhTableModule {}
