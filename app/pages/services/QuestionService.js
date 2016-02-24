import {Inject} from 'angular2/core';
import { Http, Headers } from 'angular2/http';
import 'rxjs/add/operator/map';

export class QuestionService {

	constructor(@Inject(Http) http: Http) {
		this.http = http
	}	

	listQuestion(): Observable<> {
		var headers = new Headers();
		creds=null;
		headers.append('Content-Type', 'Access-Control-Allow-Origin: *');
		var url = 'http://murmuring-reef-56934.herokuapp.com/questions';
		this.response = this.http.get(url,creds,{
				headers: headers
			}).map(res => res.json());
	  return this.response;
	}
}