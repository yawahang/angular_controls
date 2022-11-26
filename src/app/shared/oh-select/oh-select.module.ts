import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { OhSelectComponent } from './oh-select.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    OhSelectComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule, 
    FlexLayoutModule,
    MatSortModule
  ],
  exports: [OhSelectComponent],
  schemas: [NO_ERRORS_SCHEMA]
})

export class OhSelectModule {

}
