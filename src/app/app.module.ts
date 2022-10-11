import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './component/first.compnent';
import { SecondComponent } from './component/second/second.component';

@NgModule({
  declarations: [AppComponent, FirstComponent, SecondComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [SecondComponent],
})
export class AppModule {}
