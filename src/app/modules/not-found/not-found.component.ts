import { Component, OnInit, Optional, Inject, PLATFORM_ID } from '@angular/core';
import { Response } from 'express';
import {RESPONSE} from '@nguniversal/express-engine/tokens';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(@Optional() @Inject(RESPONSE) private response: Response) {
    if (response !== null) {
      response.status(404);
    }
  }

  ngOnInit(): void {}

}
