import { Component } from '@angular/core';

/**
 * Generated class for the AdvertisingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'advertising',
  templateUrl: 'advertising.html'
})
export class AdvertisingComponent {

  text: string;

  constructor() {
    console.log('Hello AdvertisingComponent Component');
    this.text = 'Hello World';
  }

}
