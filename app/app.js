import { App, IonicApp, Platform } from 'ionic/ionic';
import { QuestionListPage } from './pages/question-list/question-list';
 
@App({
  templateUrl: 'build/app.html'
})
 
class MyApp {
  constructor(app: IonicApp, platform: Platform) {
 
    this.app = app;
    this.platform = platform;
    this.initializeApp();
 
    this.rootPage = QuestionListPage;
  }
 
  initializeApp() {
    this.platform.ready().then(() => {
 
      if (typeof StatusBar !== 'undefined') {
        StatusBar.styleDefault();
      }
 
    });
  }
}