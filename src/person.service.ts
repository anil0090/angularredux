import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions,Headers} from '@angular/http';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(public http:Http) { }

  getMenuInfo():Observable<any>{
    console.log('getMenuInfo');
    const headers = new Headers({ 'content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:8080/bial/common/reqGetMenuList.on',options)
    .map((response: Response) => response.json())
    .do(data => console.log('All: ' +  JSON.stringify(data)));
  }
}
