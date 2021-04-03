import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Over2stationService {

  constructor(private http: HttpClient) { }

  public getStatus(): Observable<any> {
    return this.http.get<any>('https://o2s.shyndard.eu/status-json.xsl');
  }
}