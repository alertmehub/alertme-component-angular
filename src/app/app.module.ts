import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AlertmeComponentAngularModule} from 'alertme-component-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertmeComponentAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
