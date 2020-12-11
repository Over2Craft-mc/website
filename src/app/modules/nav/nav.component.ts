import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  static navExtended = false;

  /**
   * Open the top navbar on small screens
   */
  static openNav(): void {

    if (this.navExtended === true) { return; }

    const element: HTMLElement = document.querySelector('#nav-items');
    document.querySelector('.nav-item-extend').setAttribute('disabled', 'true');
    element.style.display = 'block';
    element.classList.add('animate__animated', 'animate__backInRight');
    element.addEventListener('animationend', () => {
    });
  }

  /**
   * Close the top navbar on small screens
   */
  static closeNav(): void {

    if (this.navExtended === false) { return; }

    const element: HTMLElement = document.querySelector('#nav-items');
    document.querySelector('.nav-item-extend').setAttribute('disabled', 'true');
    element.classList.add('animate__animated', 'animate__backOutRight');
  }

  /**
   * Toggle the top navbar on small screens
   */
  public toggleNav(): void
  {
    if (NavComponent.navExtended) {
      NavComponent.closeNav();
      return;
    }
    NavComponent.openNav();
    const navItemExtend: HTMLElement = document.querySelector('.nav-item-extend');
    navItemExtend.style.display = 'block';
  }

  constructor() {}

  ngOnInit(): void {
    const element: HTMLElement = document.querySelector('#nav-items');
    element.addEventListener('animationend', () => {
      if (NavComponent.navExtended) {
        element.classList.remove('animate__backOutRight');
        element.style.display = 'none';
        NavComponent.navExtended = false;
      } else {
        element.classList.remove('animate__backInRight');
        NavComponent.navExtended = true;
      }
    });
  }

}
