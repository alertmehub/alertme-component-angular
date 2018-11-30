import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

import { SubscriptionComponent, SubscriberComponent, SliderComponent, ContactInfoComponent } from './components';

@NgModule({
  declarations: [
    SubscriberComponent,
    SubscriptionComponent,
    SliderComponent,
    ContactInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AngularMultiSelectModule
  ],
  exports: [
    SubscriberComponent,
    SubscriptionComponent,
    SliderComponent,
    ContactInfoComponent
  ]
})
export class AlertmeComponentAngularModule { }
