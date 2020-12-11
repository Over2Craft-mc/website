import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotesService {

  constructor(private http: HttpClient) { }

  public voteOnMinecraftServerOrg(player: string): Observable<any> {
    return this.http.get('https://api.over2craft.com/votes/freebuild/reward/' + player);
  }

  public topVote(): Observable<any> {
    return this.http.get('https://api.over2craft.com/votes/freebuild/top/');
  }

  public topVoteMonthly(): Observable<any> {
    return this.http.get('https://api.over2craft.com/votes/freebuild/top/monthly');
  }
}
