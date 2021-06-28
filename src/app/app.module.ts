import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyLib, MyLib2 } from 'my-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyLib.MyLibModule,
    // MyLib2.MyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
