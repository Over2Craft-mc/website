import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-donnations',
  templateUrl: './donnations.component.html',
  styleUrls: ['./donnations.component.css']
})
export class DonnationsComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle('Over2Craft - Faire un don');
  }
  ngOnInit(): void {
  }

}
