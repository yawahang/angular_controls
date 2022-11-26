import { OhTableModule } from './../shared/oh-table/oh-table/oh-table.module';
 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { OhTableDemoComponent } from './oh-table-demo.component';

@NgModule({
  declarations: [OhTableDemoComponent],
  imports: [
    CommonModule,
    OhTableModule,
  ],
  providers: [],
  exports: [OhTableDemoComponent],
})
export class OhTableDemoModule {}
