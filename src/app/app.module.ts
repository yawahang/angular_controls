import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OhTableDemoComponent } from './oh-table-demo/oh-table-demo.component';
import { OhTableDemoModule } from './oh-table-demo/oh-table-demo.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'oh-table-demo', component: OhTableDemoComponent },
      // { path: 'oh-date-picker', component: OhDatePickerComponent },
      // { path: 'oh-rating-picker', component: OhRatingPickerComponent },
      // { path: 'oh-tree-view', component: OhTreeViewComponent },
    ]),

    // import pages
    OhTableDemoModule,

    // import pages
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
