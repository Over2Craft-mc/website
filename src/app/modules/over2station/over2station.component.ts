import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Over2stationService } from 'src/app/services/over2station/over2station.service';

@Component({
  selector: 'app-over2station',
  templateUrl: './over2station.component.html',
  styleUrls: ['./over2station.component.css']
})
export class Over2stationComponent implements OnInit, OnDestroy {

  public status: any;
  public currentId: string;
  private intervalSub: Subscription;

  constructor(private o2sService: Over2stationService, private elementRef: ElementRef) {
    this.currentId = Math.random().toString(36).substring(8);
  }

  ngOnInit(): void {
    this.loadStatus();
    this.intervalSub = interval(15000).subscribe(() => {
      this.loadStatus();
    });
  }

  ngOnDestroy(): void {
    if (this.intervalSub) {
      this.intervalSub.unsubscribe();
    }
  }

  loadStatus(): void {
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
