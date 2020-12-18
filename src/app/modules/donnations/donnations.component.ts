import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-donnations',
  templateUrl: './donnations.component.html',
  styleUrls: ['./donnations.component.css']
})
export class DonnationsComponent implements OnInit {

  public url;

  constructor(private titleService:Title, private sanitizer: DomSanitizer) {
    this.titleService.setTitle('Over2Craft - Faire un don');
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://financement.over2craft.com/'
      + encodeURI(window.location.hash.substr(1))
    );
  }

  ngOnInit(): void {
  }

}
