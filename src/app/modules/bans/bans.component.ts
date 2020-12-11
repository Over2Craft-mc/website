import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-bans',
  templateUrl: './bans.component.html',
  styleUrls: ['./bans.component.css']
})
export class BansComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle('Over2Craft - Liste des sanctions  (bans)');
  }
  ngOnInit(): void {
  }

}
