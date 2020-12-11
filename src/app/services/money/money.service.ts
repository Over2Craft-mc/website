import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {

  constructor(private http: HttpClient) { }

  public getTop(): Observable<any> {
    return this.http.get('https://api.over2craft.com/money/freebuild/top');
  }
}
