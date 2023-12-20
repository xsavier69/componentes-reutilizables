import { Component } from '@angular/core';

@Component({
  template: `
    <app-navbar></app-navbar>
    <ion-content>
      <!-- tab 2 content -->
    </ion-content>
  `  ,
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  colores = ['#FF5733', '#33FF57', '#5733FF', '#FF3333', '#33FFFF'];

  constructor() {}

}
