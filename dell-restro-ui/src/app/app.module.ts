import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { RatingComponent } from './shared/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe,
    RatingComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
