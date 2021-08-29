import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScrollableTabComponent, ImageSliderComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    ScrollableTabComponent,
    ImageSliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
