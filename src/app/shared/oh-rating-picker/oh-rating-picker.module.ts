import { OhRatingPickerComponent } from './oh-rating-picker.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    OhRatingPickerComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatIconModule
  ],
  exports: [OhRatingPickerComponent],
  schemas: [NO_ERRORS_SCHEMA]
})

export class OhRatingPickerModule {

}
