import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {AppComponent} from '../../app.component';
import {Title} from '@angular/platform-browser';

declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public tutoExtended = false;

  public copyIpSwapText: string;
  public copyIpInitialText: string;

  public app = AppComponent;

  constructor(private titleService:Title) {
  }

  public fallbackCopyTextToClipboard(text): void {
    const textArea = document.createElement('textarea');
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
  }
  public copyTextToClipboard(text): void {
    if (!navigator.clipboard) {
      this.fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(() => {
      console.log('Async: Copying to clipboard was successful!');
    }, err => {
      console.error('Async: Could not copy text: ', err);
    });
  }


  public copyIpAddress(): void {

    this.copyTextToClipboard('play.over2craft.com');

    const element: HTMLElement = document.querySelector('#tuto #server-ip > button');
    element.innerHTML = this.copyIpSwapText;
    setTimeout(() => {
      element.innerHTML = this.copyIpInitialText;
    }, 1200);
  }

  public onMouseLeaveIpAddress(): void {
    document.querySelector('#tuto #server-ip > button').innerHTML = this.copyIpInitialText;
  }

  /**
   * Call on opening #tuto
   */
  public openTuto(): void {
    const element: HTMLElement = document.getElementById('tuto');
    element.style.display = 'block';
    element.classList.add('animate__animated', 'animate__fadeInUp');
  }

  /**
   * Call at the end of the animation that open #tuto
   */
  public openTutoEnd(): void {
    const tutoElement: HTMLElement = document.getElementById('tuto');
    tutoElement.classList.remove('animate__animated', 'animate__fadeInUp');
    this.tutoExtended = true;
  }

  /**
   * Call on closing #tuto
   */
  public closeTuto(): void {
    const element: HTMLElement = document.getElementById('tuto');
    element.classList.add('animate__animated', 'animate__fadeOutDown');
  }

  /**
   * Call at the end of the animation that close #tuto
   */
  public closeTutoEnd(): void {
    const tutoElement: HTMLElement = document.getElementById('tuto');
    tutoElement.style.display = 'none';
    tutoElement.classList.remove('animate__animated', 'animate__fadeOutDown');
    this.tutoExtended = false;
  }

  ngOnInit(): void {
    particlesJS.load('particles-js', './assets/particles.json', null);

    const tutoElement: HTMLElement = document.getElementById('tuto');
    tutoElement.style.display = 'none';

    /**
     * Register event for animation ending
     */
    tutoElement.addEventListener('animationend', () => {
      if (this.tutoExtended) {
        this.closeTutoEnd();
      } else {
        this.openTutoEnd();
      }
    });

    const element: HTMLElement = document.querySelector('#tuto #server-ip > button');
    this.copyIpSwapText = element.getAttribute('data-text-swap');
    this.copyIpInitialText = element.innerHTML;

    if (window.location.hash === '#tuto') {
      this.openTuto();
    }
  }

}
