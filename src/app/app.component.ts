import { QuizPage } from './../pages/quiz/quiz';
import { MenuPage } from './../pages/menu/menu';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TranslateService } from '@ngx-translate/core';
import { MainPage } from '../pages/main/main';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = QuizPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    translateService: TranslateService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    translateService.setDefaultLang('it');
    translateService.use('it');
  }
}

