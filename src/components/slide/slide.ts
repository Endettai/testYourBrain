import { Quiz } from './../../app/data/quiz.interface';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the SlideComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'slide',
  templateUrl: 'slide.html'
})
export class SlideComponent {
  @Input() question: Quiz;
  autoManufacturers;
  checked = true;
  text: string;

  constructor() {
    console.log('Hello SlideComponent Component');
    this.text = 'Hello World';
  }

}
