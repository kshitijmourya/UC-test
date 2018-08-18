import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DisplayComponent } from './display/display.component';
import { BusinessSearchService } from './business.service';
import { FilterBusinessPipe } from './filter-business.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DisplayComponent,
    FilterBusinessPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TabsModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [BusinessSearchService],
  bootstrap: [AppComponent],
  exports: [TabsModule]
})
export class AppModule { }
