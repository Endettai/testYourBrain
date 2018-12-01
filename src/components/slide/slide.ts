import { TranslateService } from '@ngx-translate/core';
import { Quiz, Scenario } from './../../app/data/quiz.interface';
import { Component, Input } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { AlertController } from 'ionic-angular';

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
  private _question: Quiz;
  @Input() set question(question: Quiz){
    this._question = question;
    if (question.isFirst)
      this.onOpenScenario();
  };
  get qustion() {
    return this._question;
  }

  autoManufacturers;
  checked = true;
  text: string;
  selectedItem: any;

  constructor(private quizService: QuizService,
    private alertCtrl: AlertController,
    private translateService: TranslateService) {
    console.log('Hello SlideComponent Component');
    this.text = 'Hello World';
  }

  onCommitSelect() {
    console.log('enter in commit selection');
    if (this.selectedItem) {
      console.log('commit selection');
      this.quizService.onAnswerSelect.next();
    }
  }

  selectNewItem(data) {
    console.log('item selected ', data, this._question);
    this._question.answers.map(ans => {
      if (ans.shortAnsw == data) {
        ans.checked = true;
        this.selectedItem = ans;
      }
      else
        ans.checked = false;
    });
  }

  onOpenScenario() {
    console.log(this._question.scenarioId);
    const scenario = this.quizService.getScenario(this._question.scenarioId);
    this.translateService.get(scenario.description).subscribe((data) => {
      const text = data;
      const alert = this.alertCtrl.create({
        title: scenario.title,
        // subTitle: 'Are you sure?',
        message: text,
        buttons: [
          {
            text: 'Capito',
            handler: () => {
              console.log('Ok')
              // this.quoteServie.addQuoteToFavorite(selectedQuote);
            }
          }
        ]
      });
  
      alert.present();
    })
    
    // this.quizService.onAnswerSelect.next(this.selectedItem);
  }
}
