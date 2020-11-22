import { Component, OnInit } from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  public firstLoad = true;

  constructor(private router: Router) {
    this.router.events.subscribe((e: RouterEvent) => {
      this.navigationInterceptor(e);
    });
  }

  ngOnInit(): void {
    document.getElementById('loading-overlay').addEventListener('animationend', () => {
      document.getElementById('loading-overlay').style.display = 'none';
      document.getElementById('loading-overlay').classList.remove('animate__fadeOutUp');
    });
  }



  navigationInterceptor(event: RouterEvent): void {

    if (event instanceof NavigationStart) {
      if (!this.firstLoad) {
        document.getElementById('progress').style.display = 'block';
        document.getElementById('progress').style.width = '80%';
      }
    }

    if (event instanceof NavigationEnd) {
      if (this.firstLoad) {
        setTimeout(() => {
          const element: HTMLElement = document.getElementById('loading-overlay');
          element.style.display = 'block';
          element.classList.add('animate__animated', 'animate__fadeOutUp');
        }, 1000);
        this.firstLoad = false;
      } else {
        document.getElementById('progress').style.width = '100%';
        setTimeout(() => {
          document.getElementById('progress').style.display = 'none';
        }, 500);
        }
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
    }

    if (event instanceof NavigationError) {
    }
  }

}
