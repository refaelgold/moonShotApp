import {IonicApp, Page, NavController, NavParams} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/question-info/question-info.html'
})

export class QuestionInfo {
  constructor(app: IonicApp, nav: NavController, navParams: NavParams) {
    this.nav = nav;
    this.question = navParams.get('question');
    // console.log(this.movie); 
  }
}
