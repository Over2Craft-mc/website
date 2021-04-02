import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Over2stationService } from 'src/app/services/over2station/over2station.service';

@Component({
  selector: 'app-over2station',
  templateUrl: './over2station.component.html',
  styleUrls: ['./over2station.component.css']
})
export class Over2stationComponent implements OnInit, AfterViewInit {

  public status: any;

  constructor(private o2sService: Over2stationService, private elementRef: ElementRef) { } 
  
  ngAfterViewInit() {
    const mrpScript = document.createElement("script");
    mrpScript.type = "text/javascript";
    mrpScript.src = "/assets/js/mrp.js";
    this.elementRef.nativeElement.appendChild(mrpScript);
  }

  ngOnInit(): void {
    this.o2sService.getStatus().subscribe(data => {
      if (data && data.icestats) {
        this.status = data.icestats;
      }
    });
  }

}
