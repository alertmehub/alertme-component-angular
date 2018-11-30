import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<am-subscriber [serviceUrl]="serviceUrl" [token]="token"
  [appId]="appId" [publisherId]="publisherId" [externalParameters]="externalParameters"></am-subscriber>
  <p>token: <input [(ngModel)]="token"  style="width:400px"/>
  <p>publisherId: <input [(ngModel)]="publisherId"  style="width:400px"/>
  <p>appId: <input [(ngModel)]="appId"  style="width:400px"/>
  <p>serviceUrl: <input [(ngModel)]="serviceUrl" style="width:400px"/>
  `
})
export class AppComponent {
  public header = 'UMD Demo';
  token = 'token1';
  publisherId = '5bfdbf5d3394c927142164e6';
  appId = '5bfdbf5e3394c927142164e7';
  externalParameters: object = {parameter3: 'Testing123', parameter4: '1'};
  serviceUrl = 'http://localhost:3001/api/v1';
}
