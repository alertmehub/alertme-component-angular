import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

import { SubscriptionComponent } from './components/subscription/subscription.component';
import { SubscriberComponent} from './components/subscriber/subscriber.component';
import { SliderComponent} from './components/slider/slider.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';

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
export class AlertmeModule { }
