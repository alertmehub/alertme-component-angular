import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AlertmeModule} from 'alertme-component-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertmeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
