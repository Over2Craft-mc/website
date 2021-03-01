import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeUrl, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-dynmap',
  templateUrl: './dynmap.component.html',
  styleUrls: ['./dynmap.component.css']
})
export class DynmapComponent implements OnInit {

  constructor(private titleService: Title, private sanitizer: DomSanitizer) {
    this.titleService.setTitle('Over2Craft - Dynmap Freebuild');
  }

  dynmapUrl: SafeUrl;

  ngOnInit(): void {
    this.dynmapUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://dynmap.over2craft.com');
  }

  public switchDmap(url: string): void {
    this.dynmapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
