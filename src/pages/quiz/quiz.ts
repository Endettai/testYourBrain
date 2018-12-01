import { QuizService } from './../../services/quiz.service';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Quiz } from '../../app/data/quiz.interface';
import quiz from '../../app/data/quiz';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
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
  _destroy = new Subject<boolean>();
  slideOptions = {
    effect: 'slide'
  };
  quiz: Quiz[];

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private quizService: QuizService) {
    this.quiz = quiz;
    this.quizService.onAnswerSelect.pipe(takeUntil(this._destroy)).subscribe(() => {
      this.slides.lockSwipes(false);
      this.slides.slideNext();
      this.slides.lockSwipes(true);
    });
  }

  ionViewDidLoad() {
    this.slides.lockSwipes(true);
    console.log('ionViewDidLoad QuizPage');
  }
  
  goToSlide() {
    // console.log(this.slides);
    // this.slides.slideTo(2, 500);
  }
}
