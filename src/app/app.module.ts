import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomDirective } from './custom.directive';
import { TestComponent } from './test.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, CustomDirective, TestComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
