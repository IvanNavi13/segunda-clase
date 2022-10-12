import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { UnoModule } from './modules/uno/uno.module';
import { DosModule } from './modules/dos/dos.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UnoModule,
    DosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
