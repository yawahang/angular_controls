import { OhDatePickerComponent } from './oh-date-picker.component';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    OhDatePickerComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatIconModule,
    // ScrollEventModule
  ],
  exports: [OhDatePickerComponent],
  schemas: [NO_ERRORS_SCHEMA]
})

export class OhDatePickerModule {

}
