import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscriber, DeliveryOption } from '../../services/subscriber/subscriber.models';
import { SubscriberService } from '../../services/subscriber/subscriber.service';

@Component({
  selector: 'am-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  showModal = false;
  editedOptions = [];
  phonePattern = /[\+]?[1]?[-\s\.]?[(]?(\d{3})[)]?[-\s\.]?(\d{3})[-\s\.]?(\d{4})/;
  e164Pattern = /^\+1(\d{3})(\d{3})(\d{4})$/;
  emailPattern =  /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}/;
  inputPhonePattern = /[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/;

  @Input() subscriber: Subscriber;
  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor(private subService: SubscriberService) {}

  ngOnInit() {

  }

  validationExpression(option: string) {
    if (option === 'email') {
      return '\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}';
    }
    return '[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}';
  }

  openModal() {
    this.showModal = true;

    // Copy delivery option values for editing
    this.editedOptions = this.subscriber.deliveryOptions.map(option => {
      return {...option, value: this.formatForDisplay(option.value)};
    });
  }

  closeModal() {
    this.showModal = false;
  }

  saveContactInfo() {
    // Copy edited delivery options back to storage
    this.subscriber.deliveryOptions = this.editedOptions.map(option => {
      return {...option, value: this.formatForDB(option.value)};
    });

    this.subService.updateSubscriber(this.subscriber).subscribe(() => {
      this.closeModal();
    });

    this.save.emit(null);
  }

  cancel() {
    this.showModal = false;
  }

  // Format the phone number as a standard display format
  formatForDisplay(input: string): string {
    if (this.e164Pattern.test(input)) {
      return input.replace(this.e164Pattern, '($1) $2-$3');
    }
    return input;
  }

  // Format the phone as E.164 for storage in the database
  formatForDB(input: string): string {
    // Make sure its a phone number
    if (this.phonePattern.test(input)) {
      return input.replace(this.phonePattern, '+1$1$2$3');
    }
    // Otherwise, return as is.
    return input;
  }

}
