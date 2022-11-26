import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { OhTreeViewComponent } from './oh-tree-view.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    OhTreeViewComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    // MatToolbarModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [OhTreeViewComponent],
  schemas: [NO_ERRORS_SCHEMA]
})

export class OhTreeViewModule {

}
