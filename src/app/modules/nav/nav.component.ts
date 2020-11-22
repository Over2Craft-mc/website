import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private navExtended = false;

  constructor() {}

  ngOnInit(): void {
    const element: HTMLElement = document.querySelector('#nav-items');
    element.addEventListener('animationend', () => {
      if (this.navExtended) {
        element.classList.remove('animate__backOutRight');
        element.style.display = 'none';
        this.navExtended = false;
      } else {
        element.classList.remove('animate__backInRight');
        this.navExtended = true;
      }
    });
  }

  /**
   * Open the top navbar on small screens
   */
  public openNav(): void {

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
  public closeNav(): void {

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
    if (this.navExtended) {
      this.closeNav();
      return;
    }
    this.openNav();
    const navItemExtend: HTMLElement = document.querySelector('.nav-item-extend');
    navItemExtend.style.display = 'block';
  }

}
