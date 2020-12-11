import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-dynmap',
  templateUrl: './dynmap.component.html',
  styleUrls: ['./dynmap.component.css']
})
export class DynmapComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle('Over2Craft - Dynmap Freebuild');
  }

  ngOnInit(): void {
  }

}
