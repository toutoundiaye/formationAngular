import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrls: ['./xss.component.css']
})
export class XssComponent implements OnInit {

  dangerousHtml = 'Template <script>alert("Danger !")</script>';

  dangerousUrl = 'javascript:alert("Danger !)';
  safeUrl: SafeUrl;

  dangerousResourceUrl ='https://www.youtube.com/watch?v=QgzslSsSECM';
  safeResourceUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
    this.safeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousRessourceUrl);
  }

}
