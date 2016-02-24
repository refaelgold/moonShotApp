import {Page, NavController} from 'ionic/ionic';
import {QuestionService} from '../services/QuestionService';
import {QuestionInfo} from '../question-info/question-info';
 
@Page({
  templateUrl: 'build/pages/question-list/question-list.html',
  providers: [QuestionService]
})
 
export class QuestionListPage {
  constructor(nav: NavController, questionService:QuestionService) {
    this.nav = nav;
    this.questionService = questionService;
    this.questionService.listQuestion().subscribe(
        data => {this.questions = data; console.log(data);},
    err => this.logError(err),
        () => console.log('question Search Complete')
  );
  }

  itemTapped(event, question) {
    this.nav.push(QuestionInfo, {
      question: question
    });

}