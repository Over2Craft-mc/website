import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VotesService {

  constructor(private http: HttpClient) { }

  public voteOnMinecraftServerOrg() {

    console.log('test');

    const options =  {
      params: new HttpParams().set('confirmation', 'true'),
      responseType: 'text'
    };

    this.http.post('https://www.serveurs-minecraft.org/vote.php?id=9107', '')
      .pipe(
        tap(
          data => console.log(data),
          error => console.log(error)
        )
      ).subscribe();
  }
}
