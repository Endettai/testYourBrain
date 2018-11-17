import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quiz } from '../../app/data/quiz.interface';
import quiz from '../../app/data/quiz';
/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {
  slideOptions = {
    effect: 'slide'
  };
  quiz: Quiz[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.quiz = quiz;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');
  }

}
