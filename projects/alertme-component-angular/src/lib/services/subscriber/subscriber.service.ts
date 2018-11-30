import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subscriber, AlertSubscription } from './subscriber.models';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {
  api = 'https://component.alertmehub.com/api/v1';

  constructor(private http: HttpClient) {}

  setUrl(url: string) {
    this.api = url;
  }

  getSubscriber(publisherId: string, token: string, appId: string) {
    return this.http.get<Subscriber>(`${this.api}/subscribers/${publisherId}/${token}?appId=${appId}`);
  }

  updateSubscriber(subscriber: Subscriber) {
    return this.http.put<Subscriber>(`${this.api}/subscribers/${subscriber.publisherId}/${subscriber.token}`, subscriber);
  }

  saveAlertSubscription(subscription: AlertSubscription, token: string) {
    return this.http.put<AlertSubscription>(`${this.api}/subscriptions/${subscription.publisherId}/${token}`, subscription);
  }
}
