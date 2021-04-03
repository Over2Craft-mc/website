import { Component, ElementRef, OnInit } from '@angular/core';
import { Over2stationService } from 'src/app/services/over2station/over2station.service';

@Component({
  selector: 'app-over2station',
  templateUrl: './over2station.component.html',
  styleUrls: ['./over2station.component.css']
})
export class Over2stationComponent implements OnInit {

  public status: any;
  public currentId: string;

  constructor(private o2sService: Over2stationService, private elementRef: ElementRef) { 
    this.currentId = Math.random().toString(36).substring(8);
  }


  ngOnInit(): void {
    this.o2sService.getStatus().subscribe(data => {
      if (data && data.icestats) {
        this.status = data.icestats;
      }
    });
  }

  getRandomId(): string {
    return this.currentId;
  }

}
